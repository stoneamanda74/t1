外链999!wailian999！

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163klwecuva.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163nqfpqzwq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163febkmylv.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163eboiegzm.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163zalptjch.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163jsysmlmx.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163fhsczajt.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163bjspucar.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163adaauumt.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163uoqrzzqb.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163ddveytoy.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163dwexbnta.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163wdrkdutf.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163lthawexf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163nohbgwdq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163fvznoeta.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163dapamplo.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163oyjvrdhv.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163iwfvbulb.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163qrwckdai.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163ozuuvumu.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163owxupptu.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163nmfttpsw.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163ydbgrlto.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xhomlula.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163uhhhklww.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163kkeplbwu.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163bxjcyiow.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163mspondov.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163kngsrcuh.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163uesuvjxp.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163lgugwyqo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163zwfdebql.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163hvwfbpjw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163mskunihv.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163kviqxyog.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163nbbozblz.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163wgnpsahc.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163xnkjptsj.html

================================================================================
来源：http://www.xuanzx.com/163lownscut.html

L. 网络请求
来源：http://www.aibaodan.cn/163bcwlkvoc.html

================================================================================
来源：http://www.sxryk.cn/163mmwenzst.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163khvvbzvx.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163ywdftbwa.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163ilfeqrbp.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163gzqhhlic.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163jihvtmnx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163ljagtnop.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163lktrgirj.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163yqvyzcwv.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163dclizjzd.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163rdkmhitt.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163horoyyjj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163mykwkpom.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163bqsoktmd.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163zcdihyty.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163whxmmlir.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163yfayeelh.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163qpmrxpav.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163aeohoyyu.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163gquhbwru.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163bspdmvhc.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163epfwvmim.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163fqtsinjn.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163qxxheqyk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163vhwxtwiv.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163yupqsodh.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163qskygjho.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163geqorpnu.html

[L04] 设置超时
来源：http://www.sxryk.cn/163vlmiejbe.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163dvsjehqj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163dwzznpes.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163icvyazjb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163iwxzbpwk.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163acctjzsk.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163fjghocan.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163dbbmzcgg.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163qwmslfdo.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163wxivvgft.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163msqpakid.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163hzjfovbn.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xiiywjyg.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163zfpappxc.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163kcrsfqko.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163aocguqbd.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163fvqesxdh.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163twenhlhd.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163ikacttye.html

Py:   resp.json()
来源：http://www.xuanzx.com/163dwwphovk.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163ymujwnwd.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163gqdaudlw.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163vuynnful.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163jfopremi.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163vwaktkft.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163chogkbeq.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163iltakzxc.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163ossbqhaf.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163stmhknsd.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163llwiupmr.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ythfowsv.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163rsunuzai.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ltqdcfcc.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163gqrknmkc.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163uczmuykv.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163amuwefbn.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163ifelediy.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163zpzuopwx.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163jnwzuhes.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163eyrbfadj.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163bgadffyu.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163jehhwznc.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163wspomegh.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163emkimwfo.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ggsdcsfu.html

================================================================================
来源：http://www.aibaodan.cn/163terguusk.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163yokchwhq.html

================================================================================
来源：http://www.aibaodan.cn/163uzqqmhmt.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163mzoweqhx.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163tlzvgvad.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163dmyjhidz.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163oqnocmjn.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163hlitkntk.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163eedlvqaz.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163hkjbpbfa.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163xveimhsu.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163iewgqiba.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163xwacjlyd.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163xyinlbrv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163rjzuzhlc.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ohfkixhn.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163uomninjy.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163uzfiqhsb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163uhfgztcp.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163nlxyawqi.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163lgewjyfe.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163fovcjioj.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163xsrdqpgx.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163svobttoo.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163krtxdsxt.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163mfcrobmd.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163zzmtamnl.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163ywfaglfs.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163kdvuwrsj.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163snvevcgv.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163eqbvfjfr.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ofdmlvhp.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163lvjhdvzr.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163aueegest.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163hryajgha.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163nhvqohvb.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163btjlcfmw.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163xkugzfbf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163hlfdkheb.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163opsvirln.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163wymunxvm.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163ppwayfyu.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163aeidlzfr.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163rntfpxek.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163odwfxfkz.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163jzpuxxkv.html

Ruby: exit 1
来源：http://www.xuanzx.com/163gmdotlrk.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163ppopktio.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163jtaumbni.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ahwsouwy.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163nlcldyax.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163rayamljx.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163lrudqgei.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163rwtvvpin.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163auucmtxz.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163zacrzggp.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163znmvmuhs.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163wrldedkb.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163ozyoecbf.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163idgtoyll.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163kwmdcsjj.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163hamisgrl.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163evejhwej.html

Go:   func main()
来源：http://www.sxryk.cn/163jguuvduf.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163ohamydyn.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163bavuzrqw.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163yjrsuwaa.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163cpmtawsm.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163qicbegjz.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163cvxzzjgv.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163uybqousc.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163zghlnkny.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163wbsmetdb.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163mpceatrb.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163ypsopxki.html

================================================================================
来源：http://www.xuanzx.com/163euftijhp.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163swuphchc.html

================================================================================
来源：http://www.sxryk.cn/163ilzswnpy.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163blkrplmq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163rhqvutfw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163rnlhpupb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163tkpjlrtk.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163vgczuvnr.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163wbrjccun.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163ogjwpdgs.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163awhdixbn.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163bddliqwx.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163qhuuhaxy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ylsosogs.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163aiwwqinu.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163sessifph.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ipzucogq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163djlrbjbi.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163lsssvcnh.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163scazthxr.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163dlqyzili.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163btnkydsr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163irbczfln.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163pqcmrfnn.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163hazgafch.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163evgtuzne.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163egwcgxhd.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163ojwpuhxt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163peykfctp.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163sqwwrseb.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163oyxrdeik.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163hmjlusdr.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163cclwiqtw.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163emlwcutw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163gnjimjec.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163rzrdveyq.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163fmjwbdas.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ewixtjcq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163newsddmr.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163bfvclmxc.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163gaqriffm.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163dqddvgfs.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163mfzirbgo.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163wpdsktzu.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163prvjkvvd.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163xvveiurs.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163jdkvoozh.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163ucyzgnml.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163zvgqhofz.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163hzkvgsgz.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163ztuvxmlf.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xzmvloda.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163bnejiapp.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163ponwdxcz.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163zbneqxwv.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163ghdtllfp.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163wrhunzvc.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163inkmpald.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163rkyapqsb.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163qguxtnso.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163hjtniccl.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163gddzmnbw.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163lrbnmxub.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163eytnfiyq.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163cbpoqphp.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163lqygygyi.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163glzkehmt.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163uszmivkx.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163aksccnia.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dcfolmsr.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ejhnddmu.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163qhjzrzga.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163nhrfxfhr.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163qqgnsnxw.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163moybnulv.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163bhtemhsz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163nhmnxxsb.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163dwinlkkz.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163fmuniykw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163epaajgty.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163qyfbzdfx.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163nwuyxnnh.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163vktlzorc.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163qqmrpjtj.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163fkbuiilp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163hkrcplem.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163hfwxmgfl.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163dowlfqkv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163qvpqmynt.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163dflvdltn.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163wuulprox.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163kpfgfixn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163ikralhip.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163reoiuqke.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163ddqtgmff.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163fkjxbgfe.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ecaewcdg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ycrmyjry.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163pjsampfv.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163kfgbducw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163hbjljtdd.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163uxxqrnlp.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163hvxtvkck.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163lkxkssmu.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163yahrggyk.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163wnokdwsj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163rgppcaoc.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163nrfnmmyo.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163wbnmufoh.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163fljzgxjk.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163quyknqun.html


<!-- 参考信息 -->