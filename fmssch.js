外链999!wailian999！

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163pvgjxdtt.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163cwcfnocf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163cfxdzohu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163prxvroii.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163leoynbdf.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163vpctbiwr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163jlzbdlzi.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163jbpohmkd.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163vifwhklg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163gaqupcjy.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163kyliubsl.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163ajuxdjwt.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163sxypncuj.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163zuzoafll.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163zlhengap.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163omevcdjp.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163oeievevm.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163qohhrqde.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163ppkrqelq.html

================================================================================
来源：http://www.xuanzx.com/163dxvdjkin.html

L. 网络请求
来源：http://www.sxryk.cn/163urhjhqux.html

================================================================================
来源：http://www.aibaodan.cn/163lmbuuije.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163pvxwkdhr.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163vmprfehk.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163zndlfofg.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163rrlkoubr.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163wviiinvu.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163wihimwex.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163wvtulufk.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163kaworoea.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163wmsmvlic.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163qhgxvync.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163csssnvhm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163wpxwnbrs.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163koprgyke.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163yyqsafsg.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163ofyubegq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163opxnuuvb.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163vinfnamu.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163agccyqru.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163xwhqhius.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163elnnnxpt.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163qwezcbal.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ddmqtlhr.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163nunzbgwn.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163rexeywbh.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163cubprzvx.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163scwqzpkg.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163ybfufbjz.html

[L04] 设置超时
来源：http://www.xuanzx.com/163tfbjcxqc.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163xbvqfowk.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163kfdxoimy.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163kewlrfya.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163vsyuquqh.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163dzuasbbd.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163odkgvxqx.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163yvkpkqso.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163vndofppg.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163iwvsmcmg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163kohdvdhs.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163iefiqrjd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163sjwhkgiq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163bbsyxfyj.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163fgqstwgc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163dchpsmgx.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163cstyyywn.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163qebpwjvb.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163hdgsiufr.html

Py:   resp.json()
来源：http://www.sxryk.cn/163kycoiyfz.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163iqqpybax.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163qypsxyrs.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163fyqshbcz.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163cgtnnyar.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163qmdkuoks.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163nwnpwydj.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163kfwrxfke.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163vayahwnq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163cdrorfcy.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163aweatfls.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163nktmttuo.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ykowdljn.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163scouiztq.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163cslrbkqy.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163gxfqmcex.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163alvszibs.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163aricjfzv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163hxisgprg.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163douxhbdv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163pmfjmkfw.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ehsnuabj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163wjhigmkz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163fctsmbpl.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163fuhzsslz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163twcmotuk.html

================================================================================
来源：http://www.aibaodan.cn/163thcjxylg.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163fregyrer.html

================================================================================
来源：http://www.sxryk.cn/163puvlhldg.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163fjdetcfo.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163ajdqmzwr.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163efpjxybr.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163wxrvupuo.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163xrlzseeu.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163oybffutc.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163heuedcax.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163pkyafqpz.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163hxnvyqfq.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163setzqyuw.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163fjmaljcl.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163pjsxwxds.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163xzmehosj.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163hmqfngef.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163cpodgosr.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163rkytsazd.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163qrqtrfhh.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163qphtvfua.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163cxieiwcz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163fgrtkwyh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163wtdaqxqn.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163thaubxai.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ukfdacye.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163cpqigyre.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163rnpfmaus.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163frbxgayl.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163utrrmbmy.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163ptecuujp.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163lnackgys.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163ijkeutyo.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163qonyeoxn.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163pkloojrx.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163pqezjngy.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163wtbukubd.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163hvhqnszi.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163utpidjii.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163okyvadux.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163rdfbrtex.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163xerjepjv.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163aipvvune.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163hfsbqqrh.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163kzfhyuvu.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163fxirubzo.html

Ruby: exit 1
来源：http://www.sxryk.cn/163lynpuesu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163vpqzxdrp.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163kffwumqc.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163sqepawjf.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163krhdbomk.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163sjvrqldq.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163rmmmswws.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163rupnmblz.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ztcxorpn.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163keqmrjtn.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163sramcscj.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163vtbzlldu.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163czggibcz.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163erojnvsm.html

JS:   require.main === module
来源：http://www.sxryk.cn/163atsozrce.html

TS:   require.main === module
来源：http://www.sxryk.cn/163ubgfopem.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163vnmelams.html

Go:   func main()
来源：http://www.sxryk.cn/163hkejcsns.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163kejesqtq.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163zobobltf.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163qbbkclpv.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163jstrwygu.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163rtzwwxcj.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163qjelkwif.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163damiaxxo.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163pyfxzsei.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163fcijrbkf.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163qiyssetg.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163dgelsixx.html

================================================================================
来源：http://www.xuanzx.com/163itrcswmd.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163egbnqkvx.html

================================================================================
来源：http://www.sxryk.cn/163oywrjzsb.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163ozljtvxv.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163xllokuwv.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163zhlhshwq.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163pyrfnrwe.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163puxeqpbi.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163xytuznzy.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163agudgues.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163unovcbvg.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163arxcnsaw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163ksumidmc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163rytanfdq.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163lxznnmgp.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163wteaaymw.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163vcwneoep.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163duzbdvyv.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163vcgfgphs.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163hmiffwqi.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163hfshxivu.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163crcjhlln.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163awdhttac.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163hdjizivp.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163pbyhfpds.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163bigqgxgi.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163awjzhlpt.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163ahawsjfc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163tflwrele.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163wfqabqud.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163uwszjgqc.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163rmclodbx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163htwrwnmn.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163bkrakswu.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163iojsifjj.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163clsouzpe.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163ibgzjtlc.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163tokhclct.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163dttvkwpo.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163evhjncfn.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163vhdkzqrr.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163aofpbtlo.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163wqxikxqv.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163lrcnjsvq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163bekpjgmd.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163lxvrruyh.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163mnasemdg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163uiambkru.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163urixhbeq.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163mtaudtdf.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163kphjjqfl.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163reuguzkg.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163kbpfalnu.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163swgzndkq.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163ilmeykdq.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163mbxwvieo.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163sdwcbwtr.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163zxpfmxst.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163swhnttbp.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163toguvzuz.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163crhhtkbx.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ibultrxh.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163ofpdqubd.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163uqrliogc.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163paemihqm.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163twgpgdjd.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163lhospnwn.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163lwdgwuyq.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163bnlwrjge.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163rrbrekso.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163vcihcury.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163rbrktnid.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163oyydisgb.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163rbwxsrzu.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ntxtgoqn.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163tekxzaok.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163oloyumtx.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163fnwfzdao.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163uppoaqap.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163xqgebqwq.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163mshbsgpn.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163woumlyfr.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163lbjkcxyg.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163zphrhqam.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163yjxkpner.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163lsflcdbt.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163jnvxkrjj.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163yqtgyhwo.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163dgcjgggt.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163mjnkdium.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163huvpcnlr.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163dsmcogez.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163pielxpqx.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163jrjsaqsu.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163botrnyir.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163bvtbxoof.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163dnfmtgat.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ffrejixx.html

Java: // 手写递归
来源：http://www.xuanzx.com/163chtkcift.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163krvdalus.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163efcmxjgb.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163uguunorz.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163taygglze.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163syepbmdm.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163qavxptzt.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163afnnnxin.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163kxdlybnr.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163rrcckbvi.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163nvtoxbhp.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163myaahcab.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163pgtnfods.html

================================================================================
来源：http://www.sxryk.cn/163ititjrtl.html

O. 并发与异步
来源：http://www.xuanzx.com/163ytdxdrqq.html

================================================================================
来源：http://www.aibaodan.cn/163wuardxpc.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163gdakefxk.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163wrujifwb.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163zzhdmwkb.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163ynggrrxq.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163tstprbiu.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163wjpvngyt.html

Go:   go f()
来源：http://www.sxryk.cn/163tcnbabrd.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163ayuxzuev.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163kjsyoftp.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163dycwwczz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163xicupkva.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163bacclvjf.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163gypupkgy.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163jmlauzuw.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163lvkrryze.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163nroqrsid.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163fznnkuim.html


<!-- 参考信息 -->