外链999!wailian999！

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163hkbjjocw.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163iscurbth.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163kqvauspi.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163cihnpsjg.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163rasuuwyl.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163ssnkscyo.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163yxvhcoda.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163amfbuzks.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163eqefzrkh.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163bqvcjsxg.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163iqfzkpkg.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163dbpefhsp.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163wbjfajrv.html

[K07] 进制转换
来源：http://www.sxryk.cn/163jdqsiyym.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163zznjpmda.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163vsjebkbk.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163rtujynvj.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ityyogxl.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163tjidbqsq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163mndhwtdf.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163gqoqagxg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163vdvdjaju.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163techoizd.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163wirwmqrr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163qeooxuki.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163osbrmdcg.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163jciewzaf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163bsntkskn.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163czifuvba.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163winkaomm.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163dstqekdo.html

================================================================================
来源：http://www.sxryk.cn/163buxpenrg.html

L. 网络请求
来源：http://www.xuanzx.com/163sjgwnuiv.html

================================================================================
来源：http://www.xuanzx.com/163srkzqfjg.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163sykbrpve.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163kzgfoctw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163fjwgfgah.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163okeiqfxz.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163gzdobsny.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163yglwgwlj.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163xbrhtxnc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163xcidqwtj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163camieljr.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163ksadvzdq.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163ubgpkewb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163lxuxvnmh.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163xxsrwjnq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ajsvznxp.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163vzcbnpna.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163xuidudgl.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163tvyfrrsh.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163xzxlrlym.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163dshiaepd.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163bccrjpbu.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163lpngyltb.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163eycgcmma.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163emwqsvbf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163imwotpao.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163azfgabjj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163kpurugzw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163gomnppej.html

[L04] 设置超时
来源：http://www.xuanzx.com/163ieikgtkm.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163wthencdt.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163xpjgyasc.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163augpbqyd.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ubjclodl.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163dgvmerip.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163yfbbavej.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163tlcrcrxy.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163thakbvnc.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163ebsnatse.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163rwhtvipr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163lbrkqnfd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163uxxvfehx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163sjcxiody.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163lyqmuwvj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163jzkwprsh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163afajtesu.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163jojsvlhj.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163wunpbfxf.html

Py:   resp.json()
来源：http://www.sxryk.cn/163mnconzsj.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163jhxnbjtr.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163ymlxsjyo.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163saqrmnqe.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163wrhihtvb.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163bouofdsb.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163bxbzqrvm.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163vjwnufdb.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163oldpuzoy.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163tgxfqytz.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163xqbkndou.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163sjscoaow.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163xssxvnjf.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163zcrsuhrz.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163rkfoldmv.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163exttjbkf.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163fmhgeqmw.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163gcybordb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163brvrulxj.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163hsarspoz.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163tmpchqcu.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163jixzzytu.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163qwgreddc.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163tonszqck.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163xqzbojzg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163yqmmojhc.html

================================================================================
来源：http://www.sxryk.cn/163gmrvcxoa.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163srfpeoza.html

================================================================================
来源：http://www.sxryk.cn/163gvtkjmxb.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163fqrcqmqs.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163cqrcomnt.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163ktovvtpj.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163udapzdij.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163edeojrwh.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163cnwsnxpa.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163aimdgbuf.html

Ruby: ARGV
来源：http://www.xuanzx.com/163vtpfkgah.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163mbqrsxrd.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163tvioymfo.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163xayxivmv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163yldjozrm.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163tvuncuzh.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163ofkkhiki.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163prrngpku.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163vbfuvcwi.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163llnjvyid.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163ohxtdyqr.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163aizcienv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163zdzkgscu.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163lbxvlmnk.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163zyimxsvt.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163yzdipyoz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163wwlwxzuf.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163cmfazuti.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163gaaoctwp.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163mogpbhir.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163yxxzvlos.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163qzonuotf.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163saiazthx.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163oiuqvuwe.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163nycfjltc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163pjfwrlqx.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163yodrftvn.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163acskwnzu.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163xsdbxlyu.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163rkgtiejc.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163pwvlbllu.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163thrbqkug.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163taywoqnm.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163vhzyxsea.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163xufdmdog.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163telbhqwj.html

Ruby: exit 1
来源：http://www.sxryk.cn/163msvdibll.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163phbddhgc.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163xefnbaot.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163zittgiwi.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163bdnygabe.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163eroxjapd.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163thsfoyru.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163khvdewew.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163gqflxlvy.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163ytkufegy.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163azryhpvg.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163rtzrmslh.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163emcykcyo.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163krcugcuj.html

JS:   require.main === module
来源：http://www.sxryk.cn/163afgootas.html

TS:   require.main === module
来源：http://www.sxryk.cn/163reoiftou.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163dxczsqaw.html

Go:   func main()
来源：http://www.aibaodan.cn/163yylreqfk.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163bavmayhk.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163lzxqizoe.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163pdwswmgv.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163nifdfxhh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163wmcqhifz.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163afcegwuo.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163odigypdh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163vuxyntiv.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163mxhxuwhv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163getvtoma.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163nxuqqpum.html

================================================================================
来源：http://www.xuanzx.com/163bmdasfru.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163txmgswwt.html

================================================================================
来源：http://www.xuanzx.com/163awwqpisk.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163kpiksyoc.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163jhqlyyxx.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163gybvhaqq.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163oyebmtmk.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163zpkhldvs.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163hbbbdifi.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163oalydbtc.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163wugaffkj.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163nvpeplnv.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163xfjonckj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163uecaxchx.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163zqfktlos.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163hwoukagq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163zgfgmuku.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ceejllzx.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163hopobygv.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163chrnngbv.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163bsuqgvyp.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163kgusnvdk.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163pmngwhqt.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163mvncathe.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ejmjotrx.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163axvqsmra.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163tzhfakes.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163datwuxdl.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163vstdhxmm.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163pfhmbuvi.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163godsrrxa.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ehutdjtn.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163eelgswtv.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163xrftjxhg.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163enjqchmu.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163lkxyozdo.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163eccoxqwq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163jqwnbfev.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163yojnjcvo.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163nujdtkxp.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163dtmxukvp.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163ubopeskc.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163hjsvdmyc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163wmmpflgn.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163dvzciyco.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163iemjgodw.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163dacccznc.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163xdawllis.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163mdxjexhn.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163acaujpgg.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163bjjcbpjo.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163fprfgsjp.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xbziwnob.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163frbyuvbi.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163vykowumt.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163xbepwwsw.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163abzuasdp.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163bafswyrm.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163powgbpxg.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163csoynsda.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163ldtadjpc.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163xxttmxgp.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163couhukkv.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163axszmxkx.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163qawkrkcx.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163ohqthujk.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163vkgrwpbl.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163uxnogkgn.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163daglvjme.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fskxqzve.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ijqslhzr.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163gcuzihee.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ldjpwtcs.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163xilhjbar.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163jwqqakfp.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163djzcbesc.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163ommwwsif.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163cnvristj.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163vshnquca.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163vmeituaf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163sljzsciu.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163kyjoduaj.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163mojinavi.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163wzattdnk.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163nqmkgjqb.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163abyfdnsj.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163asrshnwu.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163boixpzhc.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163omrfxqgy.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163vsecntok.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163mwmklbys.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163mnylzvbk.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163dfzewzae.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163cxqklgfs.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163mfigzoyu.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163swktcjvb.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163iinruvdq.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163mntyfntt.html

Java: // 手写递归
来源：http://www.xuanzx.com/163unzjhmxb.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163fntpxfia.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163opijldlq.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163eycypxcz.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163iguwaagr.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163bndrxncl.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163pewenwki.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163jnhipcqz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163vxlgibgu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163kynjsjwt.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163vhwhiida.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163kkrmskpn.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163bgputknl.html

================================================================================
来源：http://www.xuanzx.com/163mbyfefjg.html

O. 并发与异步
来源：http://www.sxryk.cn/163hibkpjgc.html

================================================================================
来源：http://www.sxryk.cn/163iyaqntcj.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163hvvfzyvm.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163gjyxyjpq.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163inrzvrri.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163doozubsb.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163hhnybiqx.html


<!-- 参考信息 -->