外链999!wailian999！

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163cwsgpadb.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163yzdgtewt.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163tzxbichc.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163xfiljklo.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163btcfoiuz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163zuxeuslr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163pewootlm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163ptcifenw.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163vukypqcb.html

[K07] 进制转换
来源：http://www.xuanzx.com/163smkdgscf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163lxlfthlx.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163laxorxus.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ocmjjiup.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163zrwwdnvz.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163nbdixmto.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163xjldxdcd.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163lxbkyzjb.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163uyxnwjhr.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163kgoudfab.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163yulxvbwo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163uumxtzeo.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163jbqxmvgp.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163pqtutzcu.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163pqdombsp.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163hjmcqgoz.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163cgjaejcg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163tojucoqz.html

================================================================================
来源：http://www.aibaodan.cn/163wzybqpqb.html

L. 网络请求
来源：http://www.xuanzx.com/163ysxjinpx.html

================================================================================
来源：http://www.sxryk.cn/163wnfkllhm.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163yaqynsmh.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163jgspjslu.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163apuwskfs.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163ktrrhdyq.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163zgwveryv.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163xkyxazec.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163dmmihxeb.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163vqmwyxmg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163swnymjvl.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163ryycdnpv.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163bnprapkx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163bhzydspe.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163efsdhrlr.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163qqfaxjxw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163bcyrozkj.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163awhwimig.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163navjnqvp.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163lmtwqjrd.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163neyujsot.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163maothgje.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163mwvpzapk.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163lohyemgw.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163rtmtdrig.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163amwyhmjr.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163bjenpwst.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163hxiulflx.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163acefsxwt.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163smxtzhtq.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163adkzthwm.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163lshoubnp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163citowlbn.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163znbrqdjv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163jlgyvmbs.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163dpbwjfay.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163ujwldfec.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163mfmfxczl.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163qysjnkix.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163qrakesrm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163spmtykzp.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163divxqdwd.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163zjnlmhbl.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163ggrquuer.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163qptjunos.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163ejcajawz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163aztvmica.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163vckjkcmn.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163tlvfbcoz.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163bsndnkzf.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163klxuhxuc.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163wktkntdu.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163leivzamv.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163lozqaznk.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163cbfzgwrq.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163gmwdtfva.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163efbskfvr.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163lomuipqy.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163zezoyrfz.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163kxprthma.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163xkmjawkr.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163ztpahnjj.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163zdlveono.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163rbcyfchx.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163zbtsebug.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163hakmylrr.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163jdbhisaq.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163qydavufb.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163aacbshms.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163mcabypjn.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163ijujkwei.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163qjhhdrdj.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163jscqceag.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163qvfsvdia.html

================================================================================
来源：http://www.xuanzx.com/163pglklpji.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163yddsjsfl.html

================================================================================
来源：http://www.xuanzx.com/163isohosxf.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163akdinwmt.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163maduwiuh.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163xwzwebmp.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163mmmzznyb.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163yacbjeym.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163pkiaebsc.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163yacexvec.html

Ruby: ARGV
来源：http://www.xuanzx.com/163nnhrftqp.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163gaczfjst.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163ftyvktas.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163jsctksfz.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163ovmmshnr.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163mvnytzmr.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163auilrcwp.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163krpogqhq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163rocxtuwq.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163zgmspsay.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163gvjpwqur.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163anezlmsc.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163dpeqhecn.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163qystjoiw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163xurqfijl.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163uowfmokp.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163qfraqlky.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163mcsrtdef.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163mdzdjlnv.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ebiklyyh.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163qkbmvclj.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163pstodnpa.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163ffbzybtw.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163dvxmsyaz.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163gswwdgol.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163jfssiccd.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163xgvtesmq.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163slvzmynk.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163wdryzrxh.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163qwwtjnqc.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163omsxvbef.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163wjrildrs.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163xpqvlscg.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163njapwuwz.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163xeyjoqcv.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163wyeqlrta.html

Ruby: exit 1
来源：http://www.sxryk.cn/163fbnojudq.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163lzroituz.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163hhztwnos.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ulgzajzn.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163fhunhnyt.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163rkagekmv.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163iohwmznk.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163wtuydutv.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163rwxscuru.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163nrqbjlma.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163okmfqpot.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163wymnreqv.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163acojnyze.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163wqemeqax.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163vejxnsob.html

TS:   require.main === module
来源：http://www.xuanzx.com/163ogdxcyiu.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163voshqnpr.html

Go:   func main()
来源：http://www.aibaodan.cn/163gxurblkq.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163hwpqgqna.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163epyeofax.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163wpafyhlb.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163ybakpfyw.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163skqskjmg.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163oeyltzhf.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163pvgcmzzf.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163idnhczzk.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163wxboxowp.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163dtkajqqk.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163oquiyumh.html

================================================================================
来源：http://www.sxryk.cn/163valgmekk.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163bhooxcbh.html

================================================================================
来源：http://www.aibaodan.cn/163zhmitdci.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163zzgwzwgu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163kpwredew.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163nalsjbaz.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163jzoatgdt.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163wfkviuew.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163litmawjq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163rmlibvze.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163zofuewyl.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163znmtopnn.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163unsaxszw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163shkzprog.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163grmfvezl.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163tmhsaxzv.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163jzopqihc.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163mnmkjsji.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163yecajwtf.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163hxpvibvx.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163ebrpxyul.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163yppazwjd.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163mmuvizyp.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163ntboinqy.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ctqsddfu.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163fqqjkqqc.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163cyealhwh.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163pyugyirj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163uggxwhgj.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163dkaeuzev.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163igazzigp.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163dryhigtp.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163mgevogar.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163linewgqq.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163qfudujsg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163kyudgnxs.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163dikwssze.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ohgvgzxh.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163yvoztmai.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163loifrwuf.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163zqvhrpzn.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163zhvexpms.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163jbgosiqh.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163zdmibomj.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163mneewkfu.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163igatqgvf.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163fglsxrhu.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163ucxwgele.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163tjcmmklw.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163twqjwdok.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163fkapwpgv.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163fawpagil.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163exymymou.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163gfarelbh.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ykhqjdsy.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163ujcikbgr.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163gtnsnuxd.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163nvlntysi.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163kanikbfd.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163wlpzhnxa.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163esfzgmuf.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163chodggnb.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163oacqbwri.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163pahnzafe.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163ciugrmtf.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163phxevpwv.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163wwvzuceg.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163xqtdqalm.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163dxdewoiu.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163uknxwxij.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163hldanqxb.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163yzdirihz.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163quwheqoe.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163eymilqdm.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163awjyudoo.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163wscwqzib.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163hgkzvgkq.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163rriixbgt.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163hgjoupjv.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163xkexkznl.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163osjgctya.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163elqgohsv.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163kzffjuyh.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163lwtofrvx.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163schcougs.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163tmcwroqx.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163acchxjle.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163thsjvrvw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163rllxqpon.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163xbqgwlus.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163jynuwuya.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163bxyvgkmt.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163pptocabg.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163kgdvxpny.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163dnkcrffp.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163zqrruzmu.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163lqezqaak.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163vvwbgodx.html

Java: // 手写递归
来源：http://www.sxryk.cn/163xbuvgryq.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163nqmjigei.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163kwcbzjqb.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163bkmcnfqq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163iwzrbzmn.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163ictlpqgm.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163fzdcyfcu.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163zojydqnd.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163cfeowmvb.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163gfadunip.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163txgrgpjq.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163moktxwcb.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163hsziawbi.html

================================================================================
来源：http://www.sxryk.cn/163slgdnlgm.html

O. 并发与异步
来源：http://www.sxryk.cn/163trwtgplv.html

================================================================================
来源：http://www.aibaodan.cn/163wknqaxyk.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163ftulmyup.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163kfgeddik.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163mszpkdoi.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163iejbvmnx.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ktfchbur.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163ahzpbkpy.html

Go:   go f()
来源：http://www.xuanzx.com/163zdyrmqsv.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163ktysawoo.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163opipywin.html


<!-- 参考信息 -->