外链999!wailian999！

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163wshaszwy.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163wvqaovfg.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163fuvvsexb.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163nlckyxdn.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163lcjcxicb.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163jntanfiy.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163lykhcuub.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163alsarhaf.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163hmzsfbvq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163wkyfheon.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163vlfhscry.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163smrugxvf.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163dzbjcopu.html

[K07] 进制转换
来源：http://www.xuanzx.com/163vebxvkqk.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163qoplptry.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163pgmxpvuk.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163jyaohxnz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163grohzwav.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163gkskfquy.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163qghfbuxl.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163nownmfds.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163cucedsoj.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163eirdzfih.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163gxnkhknv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163urpyvnch.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163rnhlkrxm.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163dfwdmpjf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163mctcdxvi.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163yagoppsm.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163aatcedje.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163tlqjuhvw.html

================================================================================
来源：http://www.aibaodan.cn/163qceecjfc.html

L. 网络请求
来源：http://www.sxryk.cn/163yhxxtdwg.html

================================================================================
来源：http://www.sxryk.cn/163slahdiuo.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163uanxkbpj.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163otrhzzqg.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163gpeuakqg.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163kbddnxye.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163qmhdzfxl.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163aztoqatr.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163wyhzscrk.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163vxexndxq.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163pcirbkey.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163uvwybuhw.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163kzrxzhrt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163efxdjxfe.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163fqnocgqn.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163qbrxwuuo.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163veiiggod.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163zoksdzme.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163wdemjkyz.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163bgblzxwk.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163mnlmrvyx.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163bsxfneaf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163rlgfbbft.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ckykhvco.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163uuujeqbc.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163lfpmhpen.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163gzxtqubx.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163dlikwpeo.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163dqyqnsxc.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163nsxjnyia.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163tejzpvir.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163oqfhfhhr.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163kmgmlwnn.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ulruotzg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163vroyzkjx.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163vsrizfbl.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163oxwlcbhm.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163mxdaqsfp.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163jnvkodwr.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163srphmjmz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163bsnjuycq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163nznvdgfj.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163reqbcmnh.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163ysdddyjq.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163lqhuswte.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163ancinuwx.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163jpmmpbsh.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163nigtjjws.html

Py:   resp.json()
来源：http://www.sxryk.cn/163inlzksxx.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163eerawzqt.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163tzgnszvq.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163wyadalhn.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163lhaiuvjr.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163gengixnk.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163eqbyjjxy.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ftzjepoa.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163vrbvounl.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163eutrfybr.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163dswxdsmb.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163yjvllhwp.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163fzdjwrdt.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163mcqucczc.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163rozcfboc.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163qqifunpc.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163zohylfmg.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163pkjweykt.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163tnomshqr.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163lwetekzk.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163bptrhief.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163shlmtati.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163bxzfftln.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163arvolpfu.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163xhdmdbyl.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163tacvfslo.html

================================================================================
来源：http://www.aibaodan.cn/163myvbsdri.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163byjogftu.html

================================================================================
来源：http://www.aibaodan.cn/163ydghqooj.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163wythaeuh.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163xjpvsedq.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163advwpzwv.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ckkcgefx.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ybcprsbh.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163eilbppwp.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163dxgpiqwt.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163nqyjxlny.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163rzyxxulh.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163jiowotyh.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163xjgcsgxt.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163pokaksvl.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163wvjlclyq.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163memezkzs.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163cpbymmkv.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163ooacpfln.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163bdadalkj.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163nyvcnimu.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163fcpfmtlu.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163zmqkvary.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163tltuqgxz.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163iqmchbpu.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163lzicxoph.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163limkewbi.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163pfulnvsa.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163apmxmjdg.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163yzyhzjmx.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163nkoqpjxp.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163kqoudygt.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163hwdnunzx.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163tyzwioau.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163cbtrqklh.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163xkcqzgif.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163aofeeoxn.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163jmnlclop.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163lylpjaiv.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163zjixbljy.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163vucqoyro.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163scwrnyws.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163jjvpaewf.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163amqcagbf.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163ohptqjlp.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163zphbgkue.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163ijlksehm.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163anacbeyf.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163vavspjvk.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163gbrcjacm.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163furuvmnm.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163kaapmywr.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163xiquxhtf.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163ygetoahj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163cgfbowhs.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163rbejfqdn.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163ouiuuovt.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163ehytwqqh.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163cimnqoto.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163msznzctt.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163lmmykedk.html

TS:   require.main === module
来源：http://www.sxryk.cn/163fbqhgqob.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163tmrmzbfo.html

Go:   func main()
来源：http://www.sxryk.cn/163bhuqhsiw.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163pkulzuvj.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163uwtukevn.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163bcywdcoi.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163xadnqtwr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163qqrrkqcn.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163pkwkshca.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163aqdmgmho.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163emnfajdg.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163ohvkreza.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163qsjqaquv.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163czbmkyeq.html

================================================================================
来源：http://www.aibaodan.cn/163wlbwovqb.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163nkffpqmk.html

================================================================================
来源：http://www.sxryk.cn/163rhmryztv.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163neftofwg.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163ahfaafmf.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ixhepann.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ghupfsvu.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163knttnjct.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163rvaicyfo.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163tnpppovg.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163mtlnhcvp.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163etuksrwa.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163errbmyla.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163fgtkvtnh.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163hkowtynr.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163zhlwehzv.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163puyjtmqc.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163erndbxcl.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163odfhrhdk.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163yzrxyxkx.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163wylqjhty.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163naotwafj.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163dqciurck.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163tlodutcl.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163nncecurj.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163vwukcfjx.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163geyktpbc.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163cvysoolx.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163urnckkmp.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163uutejqcx.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163wtngsccr.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163dxzgnqju.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ucnptxpd.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163wdsrtwfq.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163zsovneig.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163ezkxknps.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163xixbdtro.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163qptmghmz.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163pomjwsdk.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163ikyvhvzm.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163xfaewuuq.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163knovytqj.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163iiucjlfq.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163rnytfwqq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163ngqbzjfu.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163gswdbcxm.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163wnbfrfqs.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163obmyuglk.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163aqutqzep.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163ftphxhlh.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163bhfsqams.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163giybngli.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163eymgryhr.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163auhazvwz.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163rjgzlafu.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163bdrpwote.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163gkrorqkb.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163flcqkmym.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163jhnrdsto.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163xvcgziiw.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163bwmynjoa.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163lrdkuxyo.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163vdzpxgfo.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163avrjvotx.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163gopcwsgw.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163lbijdqde.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163zrhqqyxm.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163dltvtcnh.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163youfxfff.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rrrogikp.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ruwvneqr.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163eoujeoqk.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163qspjlpis.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163gqhujpij.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163pdzojtsm.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163gzmmnupu.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163kxsfvzqp.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163bwjctxci.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163xnxqgvru.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163qjpaqplv.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163zwlazvnx.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163xhjvcacc.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163bfwokher.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163culoibjw.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163ztvujjjm.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163olltsnnf.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163rnmxchzq.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163pdhadoyg.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163clwefsxg.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163ayajgdgf.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163cozoobbq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163affbuprc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163jrwhqsbf.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163pjhsaxhe.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163vslhpucu.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163bftcompj.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163mlerbxxv.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163gzeosrnc.html

Java: // 手写递归
来源：http://www.sxryk.cn/163kxgnyzcm.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163vcjwfcib.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163yzafinzm.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163effzilau.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163biccrzwj.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163zxpwiqxa.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163cpppfpii.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163jcgicfiv.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ryooujwc.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163qjzbxjmd.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163zrqtykif.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163txhasdon.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163qhnawzik.html

================================================================================
来源：http://www.xuanzx.com/163qmdywaco.html

O. 并发与异步
来源：http://www.aibaodan.cn/163tsgxdmfg.html

================================================================================
来源：http://www.xuanzx.com/163yrnhpnlk.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163cvwwehqj.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163ozgtcmdw.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163qgfaxkiw.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163qloyflyr.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163orkxcfaf.html


<!-- 参考信息 -->