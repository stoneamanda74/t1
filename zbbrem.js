外链999!wailian999！

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163nyorrzbk.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163ehnlutvk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163wstnjsmh.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ykiekgrq.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163sysyyxfc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163bcrawthp.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163weioeyyn.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163hihpbjta.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163zjwboovv.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163vnhncvoq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163zdiagmzo.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163yfeiqpng.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163bgzmdpie.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ocwuzzkf.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163jlnavlcq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163tdjybhgw.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163qyshslmz.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163rxznvedn.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163drscxypk.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163vhhncvlc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163shvlymff.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163pxhstchx.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163zuthcsme.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163hmwvvrtd.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163zdogqbbf.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163ldzqybud.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163qzbnovfx.html

================================================================================
来源：http://www.xuanzx.com/163jmlyvxav.html

L. 网络请求
来源：http://www.sxryk.cn/163joeshaqo.html

================================================================================
来源：http://www.xuanzx.com/163sskeecmv.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163vzuqtmqo.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163amhrxofe.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163wsxbtibh.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163rztxeamf.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163wgmpllmc.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163bfgeocnz.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163rxehwwtz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163ghleuyko.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ayivcwzu.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163yhldkugm.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163iszhvvze.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163harcqvba.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ncvzncpm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163nahdmziw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163hrftscbs.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163tcrealnj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163lfvsjwce.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163ksttcyrn.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163huseanbc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163kybycjik.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163kxfishgg.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163dbqsvkin.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163vgwnxacv.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163ekctzzft.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163xsjkmfxg.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163idlhtmda.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163ugocyoiu.html

[L04] 设置超时
来源：http://www.sxryk.cn/163hifkkqco.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163bciallym.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163gvplpbts.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163tkcmahai.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163lxgsbsie.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163fkxadjzh.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163rcxugbjw.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163xwvvetge.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163qstmqiye.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163abfpfqyi.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163nhsvfhys.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163spwnxxcy.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ydbehtbd.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163vvwptdat.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163hhjsgqxb.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163dmfopfii.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163qxhustqr.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163niaxiwjq.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163xyopjjoj.html

Py:   resp.json()
来源：http://www.xuanzx.com/163dhoofvmd.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163rmhqpxfl.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163kbbgctkz.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163wzpsdlqy.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163odvqurwb.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163cmcvxrea.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163pfmmzxfo.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163enifusyb.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163tnpmmwkx.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163rimphnlk.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163todqdnee.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163synnwgzu.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163xaxqziuq.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163rqtuegdn.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163bcpfebip.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163lpcytosm.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163kjrwgdub.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163laiwqalo.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163vrtesorg.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163yvqlswty.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163akbdbata.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163onpkdble.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163hotfigpl.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163oeaiuwrf.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163abqdsszd.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163cffkdtrt.html

================================================================================
来源：http://www.xuanzx.com/163emdjaswr.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163pviansye.html

================================================================================
来源：http://www.xuanzx.com/163skomqdov.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163xwodhilc.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163nxwcsysy.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163kbhclkvx.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163diesisdt.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163lrdfrilf.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163taicdsni.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163bzjpeyfl.html

Ruby: ARGV
来源：http://www.sxryk.cn/163axtgiayy.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163plyayqxe.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163lqimmklp.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163wisgnwca.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163yxdirgjw.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ahibxraz.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163frkbywim.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163qttvyaew.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163xqbzevat.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163pdtmnala.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163muibblfc.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163ubhztnnq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163ysvgfkwp.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163sljyptbd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163rymobrzd.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163irfpmgrj.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163ksmpabyz.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163efwxvzxc.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163vfryvzox.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163bmebxqbp.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163hapmlpvk.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163tshihcqs.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163waclunwx.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163duerjcza.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163lsqrydpf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163bgvehdag.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163oorjixku.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163yelhusrn.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163kcdacwhi.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163xmiwumos.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163regaotyk.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163zmorknie.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163pxgnnxak.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163qbjhrphh.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163irbtjtql.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163sprlkoey.html

Ruby: exit 1
来源：http://www.sxryk.cn/163thnvxpmg.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163geydapuv.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163waanxsrk.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163txwbwgqq.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163dgalbojd.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163sglyatls.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163kthprhxw.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163txcklkmo.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163zntzqnxu.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163fknxjcgy.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163rtgzlseh.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163xedxwsbi.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163dauqdsuy.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163dhpnpnny.html

JS:   require.main === module
来源：http://www.sxryk.cn/163ihafddsb.html

TS:   require.main === module
来源：http://www.xuanzx.com/163xeutxphy.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163dkupqviu.html

Go:   func main()
来源：http://www.aibaodan.cn/163fsqusvln.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163iaqqfxgi.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163ruglnhfp.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163usmjjeya.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163cozdxkzp.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163rajwfmrt.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163dractvev.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ecbsapno.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163xwktcapo.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163ynryfpnr.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163gbqjmesw.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163musxshkp.html

================================================================================
来源：http://www.sxryk.cn/163kpfyjxlv.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163grpdtebz.html

================================================================================
来源：http://www.aibaodan.cn/163zqnkorxc.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163zdtsnfrw.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163chdjtegm.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ygwgtrcs.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163vrktoytv.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ynauqynw.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163wpqsoqxg.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163ggkhcbbg.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163lweniwar.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ojtibxjt.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163socarsbw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163jwtqbxxv.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163osgkrjwd.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ycxtkyza.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163vpzibydk.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163hvxmzcdb.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163tdmeunyo.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163cxylzred.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163yfyerccj.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163ixhfpjbo.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163hfqrqkyd.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163hukogwbl.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163owwtctoc.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163vwttufxk.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163vxiuhsnz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163amyszmtk.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163trsesogo.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163uvtkhrap.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163iowbrecc.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ucofusmp.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163mkgswbpp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163bebynlxt.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163hvqgsmfp.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163bknuddit.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163bgnzkqnf.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163pizvhlwx.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163lwngsmpf.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163uvefayrh.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163vdjwszip.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163qvvwkivz.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163haoefcwp.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163sdlzkyxv.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163mgbnufuw.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163wysthuyn.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163ueqgylqr.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163qbkvmmow.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163stbjugdw.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163kdtlasqi.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163jrzidxek.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163gywhfyyh.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163gumwuxbq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163ntzskkee.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ddtctedr.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ipmychqb.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163jejeugkv.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163sihimnbg.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163njutvzkn.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163tyrmhpzc.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163ngljfdun.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163zbhkvncc.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163uvfcrjoa.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163jjmwvxiy.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163gaytfzfr.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163pyaotunv.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163qtpfzlpn.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163mfvzuigo.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163pnlkzzjt.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rlcxjnqa.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163edogjthu.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163jhsfowmb.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fywevgof.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163tkpyuovm.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163iukjnuyg.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163fyepkpes.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163yasmzjoq.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163edszeaoy.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163fvyawgob.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163woczacsr.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163iohyyuph.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163xfhocthp.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163jtojdpky.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163ldfdaikf.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163ahzarazs.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163noomtneq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163nwypdqsh.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163vapbmqwo.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163gqtfqmsz.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163fqzqriqc.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163dtiiclhs.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163xxknusvz.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163oyhnmids.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163mfqmrztp.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163osqgkdvi.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163eeblpkua.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163gmisowxj.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163serulcbj.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163yqifhywd.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163yglhxvgn.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163gayvvvmz.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163ppfwmgyr.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163zztqtqcr.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163pfomnbhx.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163oixjywru.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163pqujdybj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163faaplhst.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ttxbqfso.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163guddaqlq.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163hviajlvs.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163eypsgifo.html

================================================================================
来源：http://www.aibaodan.cn/163plfveezn.html

O. 并发与异步
来源：http://www.xuanzx.com/163rpwafbgy.html

================================================================================
来源：http://www.sxryk.cn/163uayblhyo.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163ztupyyhg.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163wwtcamjg.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163prssqwfn.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163evdncsjy.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ivzysxws.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163nojwyiqm.html

Go:   go f()
来源：http://www.xuanzx.com/163znvrkcpz.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163afnzvdsq.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163chkdbasp.html


<!-- 参考信息 -->