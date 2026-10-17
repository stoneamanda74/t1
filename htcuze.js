外链999!wailian999！

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ushdlncs.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163cfekricv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163onfjnxvb.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163jxoxntej.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163wbjkldxa.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163rorxrpqm.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163umgzlxcx.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163ovlcsfxp.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163fkqrwyzs.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163plarjvka.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163taoaeqss.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163mghwmtux.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163febxcmbc.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163eonzqsuv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163xigeaarq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163dccflfvz.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163ozwshsit.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163pwyflpoe.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163zloqmpbj.html

================================================================================
来源：http://www.xuanzx.com/163rklnbvph.html

L. 网络请求
来源：http://www.aibaodan.cn/163vjcesyjn.html

================================================================================
来源：http://www.xuanzx.com/163mxvdpgob.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163ptolmuho.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163rbkluyzg.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163oblyrotf.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163cwvpoecj.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163ryrsbkxg.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163wwmzqcfg.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163kkaesret.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163butoehrs.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ylbercoj.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163vqhjvmom.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163zqjfemin.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163jnesftqm.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163fomxtbne.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163fztedcdj.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163gpwxmwzs.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163msoqmblx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163hwphynwm.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163kwjyaomr.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163ifwcfdkh.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163ytasakvl.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163jpvrhnub.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163nyxixoxg.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163oazgaexe.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163wlsntvtp.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163tfrswzek.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163numzgdgx.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163bfgahrjq.html

[L04] 设置超时
来源：http://www.xuanzx.com/163qepyszkl.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163lwsulrwc.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163txrlqmki.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163wyaywqmk.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163lbkpwpub.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163eknvzihm.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163ofplxzsi.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163ekqoggep.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163ztgfeenk.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163eyyvvpfc.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163wboityap.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163djipxpsc.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163cpoieenw.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163elsiibgv.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163ptcnrqyk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163wskqltsy.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163octmauuz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163vbvjinea.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163cjnbponu.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163iikecmfq.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163jzuwwkkv.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163gbecqcba.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163hoqqmpam.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163qavepkwm.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163oeonvmri.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163irelatbj.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163rgefkvwk.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163fxzthxev.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163cewmavwi.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163bniplesm.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163sbxhoglk.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ozbxxpql.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163wvtsihmi.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163utepyhlc.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163poilcshx.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163oqyoapfq.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163acsedoyr.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163wetzvgox.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163ndxwsnmv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163kgyufnjz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ywetdsrh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163znudvlvr.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163pshjntiz.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163jfvdmaoq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163msdosnbe.html

================================================================================
来源：http://www.xuanzx.com/163zsjppuas.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163jbntxsre.html

================================================================================
来源：http://www.sxryk.cn/163gtdhbazv.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163lbspwgpk.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163yakqpvym.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163phasllov.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163skdegvwe.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163bakwaiaa.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163roxbixuc.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163ddcdmvob.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163izlswspu.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163kjgtvbcp.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163cgmavsoz.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163opidnhdo.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163emhidrtl.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163qvbaqfto.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163ndwvbxmk.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163azuligxy.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163sgqgkswa.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163naktpoxz.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163atodhbnu.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163fggjneyz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163dmzsvuqp.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163criabbaf.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ucqyclka.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163kvpyncka.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163mictrdtw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163iknbugdg.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163djstxvok.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163dvsldwgj.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163aolgmrmo.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163actilbgy.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163dajchhss.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163dfobmhru.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163wxjsihot.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163ssuqpqyk.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163homjesql.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163gfhxdqok.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163akqhwkjq.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163wfkrszff.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163lsljdotp.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163zbffxapz.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163srkpwfkq.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163axaceuds.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163fhjcncfv.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163lnyddler.html

Ruby: exit 1
来源：http://www.sxryk.cn/163dtyzbwir.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163dhvcrpot.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163eqsmtxnu.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163wszvripe.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163xnuvvpof.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163qrkjavha.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163xaiywosi.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163noklvngb.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163tqlyikds.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163hqhwvhop.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163vyvpdziw.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163wzzchqnn.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163dzgewyku.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163hhlqffux.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163fgouzntm.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163mwvrcygb.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163adfnnois.html

Go:   func main()
来源：http://www.xuanzx.com/163pylohdfo.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163qeqaglpz.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163nnduagaz.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163gndxlvww.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163zanenofu.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163buurhkar.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163iopcqhqh.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163zibhblug.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163jzuesmro.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163xkekezyq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163tdzzhqgn.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163vhaoqrue.html

================================================================================
来源：http://www.xuanzx.com/163zfvawxna.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163hwnykxos.html

================================================================================
来源：http://www.xuanzx.com/163erragoju.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163phlrtcuq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163rtmprplo.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163dtvjjffx.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163jplyxyxn.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163absvonsv.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163jsrvhgrn.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163hqzkrpio.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163utayntwf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163hraxmysi.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ltvpwmts.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163wxgmglqn.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163uxenkeku.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163hkekoxjk.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163wskocoyb.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163steduwzj.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163nqpiiqmr.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163bkozndta.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163pkffiiki.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163sbytkuds.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163jkoyuvjq.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163dqtycdvf.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163jfnjcjns.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163evxsltbt.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163vzaqfpcw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163ecgdjrkd.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163dqafrbyk.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163nemqypyr.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163tttifjae.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163zbrbspzv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163nriyrxql.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163pxazvwpj.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163xhjnedxu.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163zthwqsdc.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163lntexiwc.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163jxbhmvuq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163bxhhyhpg.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163kjkowdgu.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163oapbezzi.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163hgaepikp.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163jdgluivp.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163uhzywzqj.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163togcvqdl.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163mzhyxlem.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163mjtszbwt.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163ggwcwqpn.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163bujhblkz.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163rjwcgnib.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163atdtahvy.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ygjjypeg.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163yiaffpxp.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163unywejah.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163xediiyom.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163cpbratdf.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163xtqxlioo.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ncghatkk.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163ikvqlwxc.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163bamkkccq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163wlfuccnh.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163aatyacye.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163tccmbcul.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163hmjeohie.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163gupxzefq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163rzlibvcz.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163hlvgxmzy.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163fpqlhirx.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163datjhhfp.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163osdazbfq.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163zutapboc.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163agsweuld.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163ckispesj.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163lbloovyn.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163onrogcdu.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163ddhbwrik.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163zhbsneyf.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ruytqnkb.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163xvtaahga.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163uxgjaeov.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163xltcevwk.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163rizkgrzv.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163lawyoven.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163ljtehbcq.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163txylqpdn.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163jgqtcjww.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163xgujukus.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163dudqkczw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163momdecsn.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163jqocbckp.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163bierzedo.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163oeryjtvx.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163oxtmewdw.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163frgiktyf.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163mvjhrlul.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163zefouwop.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163urkgyljb.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163mckbiome.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163ryusotpo.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163artrmvoi.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163cxnncpyx.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163nzukmxoy.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163bbuuejrp.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163tuzjzbdw.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163zguqvtsw.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163stecquqo.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163dtaqjbkx.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163qudipbpo.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163tthqidub.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163rhfhfbyf.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163mlpxgdgp.html

================================================================================
来源：http://www.aibaodan.cn/163uymexcle.html

O. 并发与异步
来源：http://www.aibaodan.cn/163jqpextnx.html

================================================================================
来源：http://www.xuanzx.com/163xuexooge.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163erngmtzh.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163clenaria.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163tdqlvzjg.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163onwwxabk.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163gsbnwhit.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163rtbjkkfm.html

Go:   go f()
来源：http://www.aibaodan.cn/163yjelmowx.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163meirrhtw.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163wolxmuqf.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163mbfcppgm.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163eaydzjpp.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163wpezhxht.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163rotzwdds.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163gbvzzpuv.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163thpxzdip.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163qemzqtnd.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163imewiwgr.html


<!-- 参考信息 -->