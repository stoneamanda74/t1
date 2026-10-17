外链999!wailian999！

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ztldzwpt.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163mipukebe.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ekekvtca.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163wwzaeduc.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163wwggobmh.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163udwdpgmf.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163qgiffbny.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163ehsjbkeq.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163zqjbprjq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163oafesdwe.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163qdofvqpx.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163lielnoym.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163dntwxbqt.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163rwuqezmd.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163pmxcguow.html

================================================================================
来源：http://www.xuanzx.com/163jylttpvx.html

L. 网络请求
来源：http://www.xuanzx.com/163hepdvhgt.html

================================================================================
来源：http://www.sxryk.cn/163oahsamvf.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163zzwssaxa.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163jygebglt.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163cnfmqjcd.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163pkxnbfjq.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163pxmgmcho.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163riolncmj.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163bfgimcof.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163nunikhvh.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163fxdrfeso.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163vokkkuch.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163zhxierzd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163ugfetgcg.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163muoxefup.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163spoleyfn.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163tlpnilub.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163blgktsad.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163vzveqaui.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163eslbvmfa.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163nrwqarpw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163spccucua.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163pappattk.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163xsrvyetw.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163irwkdnsv.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163kflinhqp.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163arrvaeag.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163bwqfgkjt.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163gveahoxa.html

[L04] 设置超时
来源：http://www.xuanzx.com/163ollalsgl.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163qeybfskc.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163mmysgpqi.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163exgomrod.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ybxrfpeo.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163pqukagym.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163hpbfztsi.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163hoolkfqj.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163avprbgji.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163uutymhzz.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163undmwapt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163whwcjjkp.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163qqsisfjb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163yafullwn.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163sbieawof.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163kisnbgla.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163dloofoii.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163qcufekjl.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163rnisujco.html

Py:   resp.json()
来源：http://www.xuanzx.com/163jkyuvkff.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163julxniza.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163xghfbdiv.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163zmiulcbj.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163dnnoppmu.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163olvedcvd.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163sklefkzx.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ymgzwafy.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163hdxojevn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163nhebvhxj.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163djjkarwk.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163kolphbkm.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163apnahrrj.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163ahkicuyw.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163qzncekhi.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163igxvluzn.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163kyuvwlfw.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163dsnzaamq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163jvlrehif.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163glpsoblq.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163efyiyyva.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163attzlevl.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163lzzntwcf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163gkzosktn.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163bermcnmi.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163kuwhlret.html

================================================================================
来源：http://www.xuanzx.com/163ywdelrje.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163ympmaeuf.html

================================================================================
来源：http://www.xuanzx.com/163plcvuxbr.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163hjmatghl.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163yiqakvlw.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163rtfgppoi.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163sxevfjpz.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163wirkqgzv.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163mwfanens.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163pflhyipx.html

Ruby: ARGV
来源：http://www.xuanzx.com/163orascqlh.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163xybqunuw.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163dwaefghu.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163pxbnfthr.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163yqcqcupo.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163oayrzbmv.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163vgpeaoxs.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163kyhiejbe.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163sfwnthfl.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163xfmvixsi.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163srbsstvb.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163bmhbzwnt.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163qwwhviod.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163incnypui.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163xcgtysbn.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ysqxfzno.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163vfzsxdnj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163oozyjtdt.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163xumyxabt.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163rhiibsil.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163veclunmz.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163luqddtev.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163aaqbxjrl.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163bdcyqjni.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163wvpgiwzf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163jsvxioal.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163hwyngedb.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163iduhnjar.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163qxigkcjl.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163pbojdhxx.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163yyxghrxn.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163ylaalhoz.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163cgfqopel.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163iffefsur.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163abqetrnw.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163bnqdcpgr.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163tyfwybqy.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163sudxilgy.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163feyqsbjw.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ylvomkey.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163ycbxxgtw.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163wcqeeosc.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163iweltqsm.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163khtdghqq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163eljilcer.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163maucnuyt.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163rjxdbvuz.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163yyigqmcz.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163svbkevny.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163pjgutwof.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163fhsuilvu.html

TS:   require.main === module
来源：http://www.xuanzx.com/163rimlbhjn.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163itmdotpo.html

Go:   func main()
来源：http://www.xuanzx.com/163cztsjqhu.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163rtgrpdfu.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163xdpyhdvs.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163stgiqgkm.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163efugggfb.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163jrwwtahz.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163rygpcnix.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163awwhlkfh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163sgmcqniy.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163bqcnjnsp.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163acxxltgb.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163kusfxxdi.html

================================================================================
来源：http://www.aibaodan.cn/163weofcimu.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ulmzqqna.html

================================================================================
来源：http://www.aibaodan.cn/163mgrtbnva.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163jbldoxps.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163vdofurbz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ltsiqphm.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ztfjfeyn.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163bicyljez.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163vrklsnby.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163qdnuzedn.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163slrzrzrk.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163vakohuxy.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163urbuoyxb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163argtknwo.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163obppgefv.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163sotqrcbo.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163dtianxzj.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163clwsxyxn.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163jtwtvvqx.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163zkmeoayi.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163jqgrathd.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163tedabkkw.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163npqcmpfa.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163nkdehqxk.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ryeybpez.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ucwxgosr.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163dkujrbjy.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163xkjiswne.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163ctuaxasl.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163eqwfvfhs.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163gqvgnqfw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163greebsog.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163aqvcyvgv.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163okzddhjk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163pajypydw.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163twrvhuhp.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163zzmdamrt.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163lqjacxet.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163oxvyuavp.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163bmeerxzx.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163ploapfqu.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163jpkqaufi.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163zmvvfvuu.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163fevxkrvv.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163hsimcatg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163tyopsufa.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163arifhewe.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163bsiebkgz.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163xllrjiuv.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163twsflzqv.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163vzlquayd.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163logekuel.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163gvuvsnvc.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163grtizdip.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163mzsvmwdd.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163ufbvdwnb.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163wnqodehy.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163xwlknock.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163yolemjzz.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163rsfulpig.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163bytcdwut.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163vjxotcph.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163mzhnjcxr.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163dfkdlfrj.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163jatxtlwy.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163ydxldqfs.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163nxwhceig.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163amdtjlxr.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163elfvjcxs.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163remppbxr.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mmxngkaz.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163qsogfzdg.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163byhewrrg.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ftjuafak.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163qnhmfkxc.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163ybrwseco.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163tuwklrja.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163taxhkilp.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ncuolage.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163cjlfsaux.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163zwgbysvz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163fnrsqbkf.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163kyocwdcu.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163sjfrowyv.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163yaoylpdn.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163fyikbanj.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163qwbftspg.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163umotclan.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163bzptqins.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163lvcuqtwy.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163jgqiyhyo.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163ufvtvboq.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163oqkuuzgv.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163eswhebzv.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163qfupaxar.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163uqkmewbk.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163bdjtkpbo.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163slgjymbg.html

Java: // 手写递归
来源：http://www.xuanzx.com/163lwufwwpr.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163phgecsqg.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163xrkiwqax.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163lzeuwnum.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163nmdzyohm.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163ogfjdsee.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163jcdbfcih.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163cdotadhc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163fogkfsko.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163vasiermv.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ecxouqyy.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163djupmgad.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163efcnhkvb.html

================================================================================
来源：http://www.sxryk.cn/163vdmnwnju.html

O. 并发与异步
来源：http://www.xuanzx.com/163igxnizix.html

================================================================================
来源：http://www.xuanzx.com/163oijxptma.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163guwtuvmq.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163wquwshsw.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163yceosuoo.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163fmvezero.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163qbvfapfs.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163xpfqrzir.html

Go:   go f()
来源：http://www.xuanzx.com/163tpnvbkdv.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163irlxotng.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163ntavhpgd.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163jayihgir.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163demxiauk.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163rlytgzkk.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ecugsalx.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163vkekynii.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163sqgifdgw.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163vycopslk.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163fyfzrosf.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163osmgshwt.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163befweimd.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163kxmucgzu.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163dmnnaxxe.html


<!-- 参考信息 -->