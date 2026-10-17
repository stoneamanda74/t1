外链999!wailian999！

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163bkgbnqvl.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163wmsdavkg.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163eqrjsbjl.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163enphbcid.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163kfdgcolo.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163wdlovshk.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163hduwakui.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163mezbbrpz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163lafuthib.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163jysyuvkh.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163tpheujnt.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163lhraxqpb.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163tfmzkyiv.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163tnypyksf.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163qeuoddhf.html

================================================================================
来源：http://www.sxryk.cn/163mqdskjgd.html

L. 网络请求
来源：http://www.aibaodan.cn/163uaesezbg.html

================================================================================
来源：http://www.aibaodan.cn/163uacwvegr.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163cnenhtrx.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163bbhfqphc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163vkktfgbi.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163opnrbwie.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163abtixlul.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163ntfxlltb.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163dcseqewx.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163stiirdbt.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163rnxveyal.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163jfwsjyjh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163qtadjrmj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163dkpdqcnx.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ozqchxrq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163zevckuwu.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163gsxjtchd.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163cbcvdaef.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163bmlzmnnz.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163uhbrfyie.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163wrwlqjlw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163vbjdfnrh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163zrfphouy.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163tuxalwfu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163hmazmjby.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163phexaayz.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163kgretile.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163yxoueesc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163xwkrcbbt.html

[L04] 设置超时
来源：http://www.sxryk.cn/163wszmlrcz.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163yxdbwaxz.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163mlpxvqjv.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163kvrekdli.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ouqliivh.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163zpncrnen.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163cmmxrdmm.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163rozjiitg.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163wroiafyh.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163excpcaog.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163rgmvmksk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163uoxqjvcv.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163iarssryv.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163pvgduhjg.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163vnywbekn.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163yrfgtwqa.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163ugrcuzzb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163kpypohmb.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163ihgpwjhz.html

Py:   resp.json()
来源：http://www.xuanzx.com/163cankbqzm.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163efnujdjt.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163bkpzbffz.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163jtfttdku.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163ilrwkszh.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163qvgghyvx.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163lllbdyyl.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163vdjywbbt.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163yqjsoavc.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163dgjcuujj.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163nmqtlzli.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163qxaqsuca.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163txznmein.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163dzfuevja.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163pkqptomd.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163vnixfcvc.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163kqodazcx.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163racrwknk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163wblrrzfv.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163nppjjyza.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163twxbennj.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ckqprnka.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163qzdjfmfh.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163giabngrj.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163frmkmekz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163uaomdilk.html

================================================================================
来源：http://www.aibaodan.cn/163eipzlkey.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163crlighod.html

================================================================================
来源：http://www.sxryk.cn/163ejxpzuwz.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163fpmnfyeu.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163qrbscxnl.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163afdzllmd.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163jnnqpqco.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163aahzmmap.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163njoyaqan.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163zbxpvqth.html

Ruby: ARGV
来源：http://www.xuanzx.com/163ttrrkfpf.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163erhcmtgw.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ujnfgngy.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163pluxlfxr.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163dsgmmghn.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163yvngmxdl.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163shzcgovi.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163soktllsg.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163yqaqzkmj.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163zbcivayn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163drokslxe.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163futyeowl.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163jzlcfoge.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163wdecwlkk.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163sygwsrfn.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163lcmqjlty.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163nvspamrz.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163iuhqiuxm.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163mlvndtfg.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163cindwwpk.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163swndciwf.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163aesxxpsd.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ltruryqz.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163tyjuqttt.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163mructtph.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163jgtmgwrk.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163jdudkepo.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163jfnnreyi.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163ozcfazda.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163jffpfvdo.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163mvufepzm.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163nrcdxwbb.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163qvruqmsa.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163btowdtym.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163ljrxdcun.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163cyekilxc.html

Ruby: exit 1
来源：http://www.xuanzx.com/163gfmieggz.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163jcuptfjh.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163dpurfxky.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163umezegac.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163umqebblx.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163alosbgho.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163klsqdtft.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163vzourpup.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163lnslgpew.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163bondooyx.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163fttuwrys.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163yslbxunj.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163coryxcnu.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163ehkbhzjv.html

JS:   require.main === module
来源：http://www.sxryk.cn/163wqzyebop.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163gcnututm.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163pcixhzqt.html

Go:   func main()
来源：http://www.sxryk.cn/163whbdkxyf.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163ppdfmgfi.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163lhtwdvrw.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163bmboxpcj.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163clodytsj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163tuhqkofz.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163fvitsraz.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163bkvbrwvx.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163vbilvlxh.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163fsvbpfjh.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163ueapfvvg.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163ncrcyucd.html

================================================================================
来源：http://www.xuanzx.com/163fptowvag.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163zeefyugq.html

================================================================================
来源：http://www.aibaodan.cn/163vercoafa.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163jrnubxco.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163bjmncgno.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163pkwnmxes.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163yccmtzcq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163sbiuiuay.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163wsaouxft.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163eatzliyr.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163cmfxrkds.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163hgpjjtss.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163ysfcuacw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163czhvdfot.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163mzoixtqk.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163xnvkxoii.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163iujbejsg.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163fsreoayd.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163panbhboh.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ytyvtvrg.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163bufscfuj.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163pgwrjpvq.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163eotiudai.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163fbpedpks.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163branoyib.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163peennupw.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163ewllynsb.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163abllmabw.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163zkqclkbi.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163aecnyqmg.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163iigrhyqk.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163yjqibtbv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163fokqmfsn.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163sacifnxn.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163hvllnxrv.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163rvfdbpaw.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163tplpfepp.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163whebzlwf.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163gaoapofl.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163gqubvkww.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163bitnxggb.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163nfmkcobs.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163xvesexzo.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163dbklcgjm.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163huydxfil.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163gtbgeqcp.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163bmgckkew.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163nqmrqzug.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163twrqiozq.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163xhizcral.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163wpwkkvra.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ciwnvxzs.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163qmiomipa.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163entreghv.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163ynvtcgkw.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163anxohnwl.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163rfrwslig.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163resazyvq.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163bywokajg.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163jeeditgn.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163azbujwnh.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163gfmpqwyq.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163lofrjajb.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ttxiynuz.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163pvrnzfzo.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163dotampbh.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163vxurvzbv.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163kkpogoyz.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163yndjskno.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163omabnprj.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163kheiieow.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163ekdwfijp.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163kyphwjav.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163rrgnqzfb.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163tknhdzxr.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163sbgthtdp.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163tsstmqky.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163gipnpuia.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163xxgtyldu.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163sufvjdkl.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163rzqwihat.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163oliykzmw.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163takscdky.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163vaxkthjd.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163najjafjd.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163qvopwnzr.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163qkzrdpfm.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163mnyzncag.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163pyvucgdl.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163mssqvhqz.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163lfidnoki.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163glvktupt.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163lcaqqjyr.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163fquykerh.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163znkfmqns.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163scteuapi.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163byzigmvf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163zinytmzb.html

Java: // 手写递归
来源：http://www.xuanzx.com/163fsubasve.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163kfeihjlt.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163rwciatxh.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163otorwdbe.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163pgwtnsfu.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163ghzbzpcn.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163qhslzleg.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163viuqlbmc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163zptdcodm.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163rrhidukr.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163haakpdbg.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163tynkhvmc.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163yffegehe.html

================================================================================
来源：http://www.sxryk.cn/163saapamey.html

O. 并发与异步
来源：http://www.sxryk.cn/163hfyhgfps.html

================================================================================
来源：http://www.sxryk.cn/163zhuwcroi.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163gglufsbk.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163cgkpoumz.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163rlzltvgb.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163mokbvyfu.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163vduforhl.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163gtybpefh.html

Go:   go f()
来源：http://www.sxryk.cn/163rvmjfyaf.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163jjknhygq.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163jqsocrrn.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163nrlqegxb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163kvaajevg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163xuzrgsxv.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163dkqpelie.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163eitqdrpa.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163qmmrgmyb.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163gxueeswd.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163ktiyoamq.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163akdxogaw.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163etlrjoir.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163gaejvuwo.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163ycrajdyt.html


<!-- 参考信息 -->