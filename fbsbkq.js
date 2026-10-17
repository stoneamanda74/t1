外链999!wailian999！

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163qucwqqzf.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163dkiuqijb.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163zytooafk.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163bdoeziov.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163awhcviol.html

[K07] 进制转换
来源：http://www.xuanzx.com/163dwywnwoy.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163avhchdzh.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163agquykkl.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163fhstgbtt.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163guifoqcx.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163zgfscgtv.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163efzgrokr.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163gtswuorl.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163oqepcowz.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163swawzxay.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163mrbcfbly.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163slshxcva.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163nebegjrm.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163zwcsalik.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163gtovejsk.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163rihsunqd.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163dmdqayvq.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163kpvlbyid.html

================================================================================
来源：http://www.aibaodan.cn/163efyyyhzf.html

L. 网络请求
来源：http://www.sxryk.cn/163bqeapcjw.html

================================================================================
来源：http://www.aibaodan.cn/163yylydcvs.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163mpknkoxn.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163kiiygyfq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163elclqwev.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163xuykfpoo.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163xwlyqopz.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163mhfowhnp.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163sycvmavt.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163fwqyawdg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163dayxyure.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163uwpmxbpn.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163pkfuzxcr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163vpknceaj.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163nvowgwbt.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163dthsxaww.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163qprvtzgo.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163kwjuztjy.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163jumojgvi.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163uzkjvmau.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ojxbhtpf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163iqhkfcim.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163djdmlltx.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163pwppvoit.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163gehktrhm.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163xliebosu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163apkxbqym.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163vckasdfp.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163nmujveqf.html

[L04] 设置超时
来源：http://www.sxryk.cn/163osuwlhhj.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163mzptgbix.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163gxggllha.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163yfxxwdqw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163nzqhafuv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163wexcnrhd.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163yrqdyrrc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163ioauhcfv.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163pnkgqkne.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163qylbslec.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163qgchzjdk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163znyelovf.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163hikxaxss.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163xaxjniyn.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163xgxeuigo.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163qzjkhvct.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163ywjstbbv.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163tszplpdq.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163favwaurf.html

Py:   resp.json()
来源：http://www.sxryk.cn/163pnvbfrku.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ypadxrww.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163zrsangge.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163fvwdmvpj.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163fdenczrq.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163vgzziucn.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163wfsvscau.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163nhobpkrd.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163oponzvrq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163rwedokvb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163xzaiczjj.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163wkomkqux.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vwaxmxvx.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163qroqbchr.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163wbmalgyf.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163lzplkivx.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163ktzlemjp.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163yfolatho.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163yltbbsit.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163afuvrgcf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163yyevjsnk.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163icogtjcz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163dsdykoug.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163jovsrzjx.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163qlykyecb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163milwrcvp.html

================================================================================
来源：http://www.aibaodan.cn/163istszdgo.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163lnnkgcbl.html

================================================================================
来源：http://www.xuanzx.com/163ibmfqnuv.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163zzxhetyv.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163iwjjemxs.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163bwwhybzm.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163rmafqavm.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ftsmlygw.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163lvxuglyb.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163gncmmbfs.html

Ruby: ARGV
来源：http://www.xuanzx.com/163xbzwigcr.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163ytguzmyj.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163pikebkol.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163afzyjhyh.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163zfqzjnjg.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163bofzhwon.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163kgegkzxf.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163wxcrzrxn.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163wlrgzwnf.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163wikpskhl.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163hqaclnzi.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163tyqohbvh.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163mhjfnpzw.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163mvvaaqpp.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163luiyivad.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163sycxiunp.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163hyxtenkn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163cqutihnr.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163qkstxyvc.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163vsxvszyj.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163mjhjtkwt.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163uvkjjjnu.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163vpxadquc.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163cbeujqcc.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163ubqbhrya.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163ahrxuevy.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163xrkevxmr.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163cxjoafua.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163ucqdxdgf.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163yfqschip.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163mltqqriu.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163rdwapeag.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163itlnggzm.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163hjxqwgzu.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163drdntbwv.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163yyyrngom.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163riaamidn.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163xrcsgzbh.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163gqqfzqqn.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163fgqrpoow.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163ffwjnnpv.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163ywhcbgvz.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ilqmzqcv.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163qqeduuci.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163kvxcnrib.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163rsqoinqw.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163pyszqybi.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163dhesmkdb.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163mutgwmia.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163xfdwnixy.html

JS:   require.main === module
来源：http://www.sxryk.cn/163nlxashyh.html

TS:   require.main === module
来源：http://www.xuanzx.com/163nedvozxv.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163lsoijatc.html

Go:   func main()
来源：http://www.xuanzx.com/163majoxnbx.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163sjuxnbvx.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163zdjubglx.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163xtozobmg.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163vwxlgjzj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163edafngsq.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163mtjyicce.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163riopybpz.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163zmogdgxt.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163hpcpcsiy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163cfmvgxzj.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163mbtnnyqg.html

================================================================================
来源：http://www.aibaodan.cn/163wvzraiee.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163giylfwef.html

================================================================================
来源：http://www.sxryk.cn/163bibefrdc.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163tgkkskka.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163zzbkpinw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163ikxkfkuy.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163rxyxfaxt.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163kpzqlsuk.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163sabwmdya.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163wupdecoc.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163wvgirkjz.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163dkcyrenh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163iqtrplsl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163pcfxuuni.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163rabmuxap.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ywfkorhd.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163yuddipdg.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163lmdsmfgt.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ggnztgcn.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163kbkrcmcp.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163droajrea.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163bvzbunpx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163vlajbioc.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163jkhnqtnw.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163vysicalb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163xwhdvxwp.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163glbglwvk.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163fykklpvb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163wscefxcx.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163krdsvhsn.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163fvxyhmoc.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163xvcivcwm.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163kcivouoa.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163qdlmcwze.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163xxuzhuts.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163ayihwqzr.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163epjavpea.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163snoxpiem.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163lqchpalg.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163ldwemehu.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163dsddaatn.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163iebqxped.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ltodkmde.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ctpwjlrp.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163phwguyin.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163gcpppvnz.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163ursqtqqb.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163mpenmyfm.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163anlmcqpw.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163xdtenztq.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163cwyljymt.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ltjioxxk.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163aqpbpjud.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163ixrqvfjj.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163pdsfwtwj.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163zhqwwpmo.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163basixvqi.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163iighgupm.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163ggoqoiqd.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163qgvhtsmt.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163jjtgcywj.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163aivoizmf.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163dpbbwlgu.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163aafzdgqk.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163mjzqcxho.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163fywbcauw.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163dwwdycmh.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163anzicwio.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163bxyylmgp.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mhranqey.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163endurzhp.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163zcsoollu.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163lonjgmwx.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163mnqbsihy.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wxnyvrci.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163fabbsitp.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163dwtflbag.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163millpirv.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163rjnytzzw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163mvsapodj.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163zebbfypb.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163zskmgxpp.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163mfgmucpz.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163npdzgsgf.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163trruhkip.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163quyvddtp.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163bvvjrqny.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163ynzuqqsx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163kkwjcnjj.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163rqvcolvf.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163vljxksgq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163vyisccom.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163qwchnnbc.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163imrerddl.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163jlsynnfd.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163ssqzpjex.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163obuhvxaj.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163emykzipk.html

Java: // 手写递归
来源：http://www.xuanzx.com/163odhylntq.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163tikmoulk.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163gsqtavds.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163woeebztc.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163wakgypyl.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163azfrcatj.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163bajwbyfm.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163eraueubk.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163rpznocgx.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163dbtwfunm.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163iqaghrtg.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163kjlyazlg.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163etioyene.html

================================================================================
来源：http://www.aibaodan.cn/163gutqvhtg.html

O. 并发与异步
来源：http://www.sxryk.cn/163apmlbokk.html

================================================================================
来源：http://www.aibaodan.cn/163slerfnnd.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163dkxjsriv.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163yhfqjrpo.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163ugtoambl.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163pxblfmod.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163auyuwtsa.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163uvrpypmk.html

Go:   go f()
来源：http://www.sxryk.cn/163anoqcadf.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163zfmtkvbu.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163yziokine.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163ehabasww.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163meprdiiq.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163cytoqpez.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163beoofhzy.html


<!-- 参考信息 -->