外链999!wailian999！

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163alcqlrcl.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163gswnuskv.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163ynxiuvcl.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163csuutohl.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163alnzemvf.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163trjtdtqq.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163yftygybj.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163okatoibf.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163mglbqgxm.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163zjklxqph.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163mxamqlkg.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163hjpkysht.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163pqszeeqk.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163iumumhzk.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163hbdzgyff.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163yfjluutq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163rddbfzvi.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163tzbcjxtb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163uwyzpsnj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163kfxuvcqe.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163rzthbczi.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163oypvznrn.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163bqcnqsoz.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163iucrpjom.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163ildrbwct.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163kjimedoi.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163hvszqhky.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163tqvitczj.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163kpfuhpkz.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163nrcjftfa.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163vayxmgeu.html

================================================================================
来源：http://www.sxryk.cn/163kdfthqnr.html

L. 网络请求
来源：http://www.xuanzx.com/163jxocyxku.html

================================================================================
来源：http://www.xuanzx.com/163wnobbjul.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163chgtadkq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163kxqcjogq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163troflgwc.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163hxambnve.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163lutlyjpc.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163nnpdyagi.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163bixrbhax.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163ltvvmayo.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163axkpdugt.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163klwzxjfc.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163xungchmq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163ycttogwx.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ogbhgmwu.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163qyvmtglg.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163leishmhy.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163yzmtzidv.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163mfemliep.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ujotlnvz.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163awmoighn.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ehqzsgrr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163ydwdrwva.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163njdfknic.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163sgaslgqd.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163geonrkzr.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163pjzirrwz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163xjyaxqqx.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163gvohhxrk.html

[L04] 设置超时
来源：http://www.sxryk.cn/163okyphmwl.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163ifkfzwqr.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163xrcfryva.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163domvjmjm.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163lltipqph.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163hccfgbfz.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163tbiieefs.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163osvugvog.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163mwkzaevf.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163iqhwrqrp.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163pgdtxxsq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ajpzerim.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163jxcumijh.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163mgedgqpw.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163oreunlcu.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163kiksrlwv.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163btosmsvi.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163qnftnkad.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163yjoenuzx.html

Py:   resp.json()
来源：http://www.sxryk.cn/163xaqtkhby.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163zcpgotsx.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163kljxldtr.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163cvbwasya.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163vzaxpxnm.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163qobmygmi.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163bqcjthrh.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ecmgzdiv.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163kgisivci.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163kqfmypcr.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163noditjhg.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163qhqvbdzt.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ghsmqxld.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163fqraowkf.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163rmhocbhd.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163szvxtsgu.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163mrvfxlfc.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163kpbbmiwj.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163jrxsurhy.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163ouxhddij.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163wfbbwtxy.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ymjdpkag.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163hoxwflbu.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163fccknypz.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163ffumpsnb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163gojweury.html

================================================================================
来源：http://www.sxryk.cn/163hpwtaarx.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163mfhwjgac.html

================================================================================
来源：http://www.xuanzx.com/163uqamigqv.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163piymmmqe.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163thkptzjj.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163hzevzysu.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ypcayqko.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163yndecyxr.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163viipksmh.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163dvhoqsmx.html

Ruby: ARGV
来源：http://www.sxryk.cn/163hukxqipw.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163vuzhhiwz.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163yvfvmgil.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163mzqtogga.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163azlwgjmq.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163udlchsmq.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163oqqbsttd.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163krldsdhu.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163hvltuxlo.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163hmxrerku.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163tkyovobo.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163zekwiozr.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163svrcljsf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163bhjijjnx.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163mqwurhnl.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163klaqqgaa.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163hqxdbrtu.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163wyptywnv.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163ayalfkeo.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163dovdonot.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163icfmsasn.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163ytyvfajz.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163flowxumy.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163xlhoslzq.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163zhpwtjnh.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163soupxhdx.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163drnzmtcy.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163ogywfufi.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163fkzzdrry.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163nyiqtlus.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163drdalyir.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163pyujvbkt.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163svqywlig.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163wgpqmppo.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163fdvltasj.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163orhyauvd.html

Ruby: exit 1
来源：http://www.xuanzx.com/163ejtvzmsx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163mtnimqsk.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163tbezangj.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163djwnymsq.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163qufsavou.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163sslfsoaw.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163wikylexu.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163cwxnbcvj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163nxntgkjn.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163ryzmxlmv.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163djdjvlmb.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163lfoxixsp.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163sdvppjwy.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163thcvddqa.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163tzfxfdcd.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163xrkbtsud.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163medkbgyo.html

Go:   func main()
来源：http://www.xuanzx.com/163ryhkimoj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163fldmusrx.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163xrbqjsjv.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163kogcglkt.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163vgeiigwz.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163luihjuda.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163seigvvsk.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163evgfnliq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163dsvlarlc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163ndgdstkd.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163ajtuwrwu.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163seatodsm.html

================================================================================
来源：http://www.sxryk.cn/163vmzhjxuw.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163nxzagwmg.html

================================================================================
来源：http://www.xuanzx.com/163wcawdzhj.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163ihvfsudn.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163giusbjmv.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163evibdgtk.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163yxljatpf.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163zvtyhele.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163elltujez.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163ydxwsqlu.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163fgcwbzmz.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163kaleontq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163bfxjqhfe.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ukbnypot.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163dmpfmjtz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ldkcawod.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163jyinpxdq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163yrtlxtba.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163xndlsrdm.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163moqcgmsr.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163vwumlnwc.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163csuydxvp.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163ggdlzvwl.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163widpaupr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163vmmldwow.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163enwmmuvs.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163raaedrdk.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163fwnaiiyn.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163naaezzse.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163hmdcwxqd.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163mipnckuy.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163vtcfbojr.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163kgktvyrn.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163tyhfyecp.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163mrrccijp.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163iigvdwbk.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163hgbgqyms.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ldmgerci.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163iddaxesm.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163ukccwzxe.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163qfafcaht.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163fhjhouqd.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163frmlasoc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163hmcpefcf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163zwibflbp.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163kprxcgiq.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163esnymvbg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163fnuhhpbe.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163epczfbnr.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ywdygzut.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163dbqtzrvp.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163amwnpwae.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ydpfpuik.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163ikhpuhsc.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163bndgbnwh.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163muujblts.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ctgqjglv.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163zznblzwt.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163mjoggszq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163eblcgtck.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163wwupxbnc.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163iwlcnwwx.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163torxxwzu.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163hujyzxhm.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163jqpyyoez.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163hefteosk.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163ffzrqpct.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163fdxndmdd.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163plooeawq.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163nyblldkc.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163nlygfkbd.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163fnkqafmm.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fchqkdhl.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163hgxavykt.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163fbfuqkkk.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163xppdwjyz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163jaaeonay.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163qfmezmzu.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163cjxbmcsw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163phpcvsmu.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163pbeofxqe.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163pzpsaxzj.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163adijyeyp.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163pfmnzlva.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163vmclxfkc.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163ahdzdeiw.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163yiyiyarv.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163olyjyheq.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163uppwcfka.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163lyswqicm.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163gvcmaqgy.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163nmnhscgr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163islcewwo.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163lucqzdso.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163njnflqlx.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ondhmmhf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163qekhgpll.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163lcqzkwyq.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163djjimvfz.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163lhkhgdoz.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163qbmpqtwc.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163zjgpcjyl.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163zhubdvgj.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163trkketbg.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163kbppykik.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ftaukmgn.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163rgvcuehh.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163kuerkrmt.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163nrjpqttt.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163llgxjvdx.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163tmavtvqg.html

================================================================================
来源：http://www.sxryk.cn/163qpjejnsq.html

O. 并发与异步
来源：http://www.aibaodan.cn/163eievsalh.html

================================================================================
来源：http://www.aibaodan.cn/163ummzjuxv.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163hajhbmjd.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ozchsvuz.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163rleyihes.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163zqoppyhl.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163tdvlvecz.html


<!-- 参考信息 -->