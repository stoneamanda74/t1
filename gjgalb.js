外链999!wailian999！

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163czmrssbc.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163vpbppvpz.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163rzvyfbhe.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163bqivvalx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163aeadevsd.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163kppamlcl.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163fclwlekl.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163fqfkwbgo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163nqkpzliu.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ndzbvrkl.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163dyfnvgcw.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163imxmnbdj.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163snxjidrq.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163loudjuqp.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163nyembcaw.html

================================================================================
来源：http://www.xuanzx.com/163dzamexlz.html

L. 网络请求
来源：http://www.sxryk.cn/163iwkdyowk.html

================================================================================
来源：http://www.xuanzx.com/163pfrtzqsp.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163fkvykyub.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163rikpsjxy.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163wquxawgf.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163xonqsxtd.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163vkdcybld.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163fxbrihyg.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163uaoobrly.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163nzdyjxjm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163nlaydgta.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163kjeykzla.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163pogdxnjn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163bqvgvyjp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163whtygrdr.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163xloeyofl.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163liiefbco.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163zzfvuatl.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163uganmcih.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163jzgjpdwq.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163ugkcfcja.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163wbcmwykk.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163sekyxjkj.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163hveowzya.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ltkimobr.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163xdzmoxxm.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163pjmzjabv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163kznilbyz.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163qpfanhtm.html

[L04] 设置超时
来源：http://www.sxryk.cn/163rcpqgjjl.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163zetcejaz.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163cfjazruy.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163psyxhijt.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163fczahhnt.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163unkgxxvq.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ylhpquua.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ujkbmjvd.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163zkdkkzel.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163baurxrzi.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163aygvfdel.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163vmdskznq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xfsbpeym.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163spjpzbck.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163jgljxyhx.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163abbuiske.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163gcchtpdw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163tqzbcqya.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163adhvzrlp.html

Py:   resp.json()
来源：http://www.xuanzx.com/163wiwodksc.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ynzazxwk.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163ktxkwrmx.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163datuukdj.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163umbplbbd.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163uunslafr.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163snxswoza.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163xnhdpcat.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163vrmtfnpp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163axxmistl.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163sndlntuh.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163fhxsexos.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163qpwfajnn.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163ahmzphtu.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163duupccvm.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163swhiwciu.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163kwojmvkm.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163qhgotkcq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163bmvwysoa.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163iwahgamw.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163zzzyiftb.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163fyvktpek.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163gdoqdlae.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163hevzstdf.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163gzmrkugt.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163xjkzhjfx.html

================================================================================
来源：http://www.sxryk.cn/163zbfehafl.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163emsvhxme.html

================================================================================
来源：http://www.sxryk.cn/163rsirqipv.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163gwsfolkt.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163blsehduu.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163avqsjjyo.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163mivkribu.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163mhtgugse.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ldtwuufo.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163axvapxwj.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163qeevojwa.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163mlwzzzwq.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163hdaslrhu.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163otattllw.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163nvberhsk.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163bixkegga.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163addpxbdy.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163faiegpfa.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163brppnajn.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163pobeejlw.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163znnyahul.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163foetltwv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163ghkjqada.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163stntyxea.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163hyishjtr.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163isbkwrxg.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163dguhmkie.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ccmvrilc.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163vmvfxkcg.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163pfzumvxw.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163yznenvfj.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163hagbrhvc.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163slkzacan.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163eedqclat.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163yfgdwcss.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163iivnekoy.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163irfftpum.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163gbnxufab.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163lhztumrn.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163iritlnfk.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163pxbyghsf.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163cgvneboz.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163czopuvgd.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ehzhodvw.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163mvdrvzjr.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163gdqlqexn.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163sdccdhnn.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163zlkdxcmi.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163sirgnijj.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163cqjxrgfm.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163pryfdjac.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163rgqdqprx.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163wopsmifz.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163dhggggsn.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163bgapskqe.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163qwmdhdyc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163uojdxanu.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163saamzcdk.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163dnkggfvl.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163bjfqhhyo.html

JS:   require.main === module
来源：http://www.sxryk.cn/163vedehppc.html

TS:   require.main === module
来源：http://www.sxryk.cn/163cstqxeew.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163txmivgpc.html

Go:   func main()
来源：http://www.aibaodan.cn/163pikrlfge.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163secpsttk.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163mzqjqowv.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163fvfepgjt.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163dhazmgbs.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163vclrtomr.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163pyolanah.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163xiowiszu.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163ldricsgm.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163nvgkagdm.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163jnijidhj.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163avskieip.html

================================================================================
来源：http://www.aibaodan.cn/163wkspifar.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163ijlirsvb.html

================================================================================
来源：http://www.xuanzx.com/163mxakcbij.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163rvncckys.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163mpumgwaj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163zdmbabhb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163lqvvoslf.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163crtpujay.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163ofzcpdig.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163ewhyatgc.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163xvrawluf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163pjujzpag.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163fuhpvmwt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ktzfcqzs.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163qeuowipx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163sehlrlfy.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163mcsnvubs.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163yietnahj.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163gvzohwwz.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163libpxtbs.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163wydwpwsq.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163bkqovbjk.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163kgizlwcg.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163dwaaixca.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163efpcfsgt.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163qxltgayb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163gynrqmqe.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163qepklwow.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163ioekpfyb.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163gtcyxxwx.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163eatxepwe.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163zkgsvnqc.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ipquvfvp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163jumdfdtp.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163zmizejya.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163srojkwri.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163efdwfcfz.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163jsdxvflc.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163rlemyhjf.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163horjcnmq.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163jygklbpv.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163ygupsftc.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163nqbohmym.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163flwiivrm.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163wzlimgyt.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163vumdpfyj.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163piiutfnh.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163dydhwhjn.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163tesldadj.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163jxhfwtdb.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163gqyyuflg.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163sljcajph.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tzzsjrhy.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163dnhlvdgq.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163lunvmuas.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163psdqmzmr.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163sxdktfqb.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163jrxcsdfk.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163eoplnwop.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163sistpspf.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163yrsogsqa.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163vpewdyzs.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163mmqnnlgq.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163pdttdczg.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163gtmnstkn.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163mpvcesyk.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163sfnkcwgp.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163pufqgfnc.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ycwzdjft.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163zuuafpiu.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163jjfhleol.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163pithtthz.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163ogynmefr.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163livutavl.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ixtchray.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163kuwmuvom.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163omqrntqv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163zgilfgrx.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163wdjvebmh.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163bsnmgvjz.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163avkxyypj.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163lqsdkldp.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163rmaoblnu.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163ronhcevs.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163lhdgidja.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163hjpylfyb.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163nvxwigeh.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163ugftamzt.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163swfuuluw.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163mnebzuen.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163oalflzpm.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163shccquiu.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163wffizxiy.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163mgwvzzub.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163glgyytzo.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163mqrlntmy.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163psteldsv.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163wuiarinb.html

Java: // 手写递归
来源：http://www.xuanzx.com/163yszjmwxf.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163oprpsfjv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163vptlazem.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163nkmojdad.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163fetwlpjr.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163inoacdkv.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163omyhyqho.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163jkrcjbgl.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163sbrvfkal.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163oycfrdyw.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163janlrhnd.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163sfikihlr.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163lcrfyfxm.html

================================================================================
来源：http://www.sxryk.cn/163gujwdfkh.html

O. 并发与异步
来源：http://www.aibaodan.cn/163micqxlpp.html

================================================================================
来源：http://www.sxryk.cn/163mjfwwqov.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163fzuxwvow.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163udvfzrtu.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163yvgbubir.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163zqpnvemr.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163hbldrlhi.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163vchqvbld.html

Go:   go f()
来源：http://www.aibaodan.cn/163gwdatvpr.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163blbgawgm.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163zahdbhtx.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163yvgdnury.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163dwnorlsb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163fbchyozp.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163opsiegfx.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163devmngfg.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163iwbzpxea.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163ssmrpsqm.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163yvpwvnpj.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163uwonofjq.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163xahlfddt.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163snrwqgkf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163lsjtujaa.html


<!-- 参考信息 -->