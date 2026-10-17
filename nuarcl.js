外链999!wailian999！

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163hcohliek.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163ogsdtvax.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163lbbqxayd.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163zxcgkpsg.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163mrdbouxx.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163diqoqjwv.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163xkfjkfvw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163fozjfppi.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ikjagumq.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163kfkzeumc.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163gdrtgdqi.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163stqctfiy.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163pujhwaaq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163seuqmbrq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163wujlkqbw.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163ptxyxgen.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163moejjepq.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163djflfsnq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163phvphtgf.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163mhccodss.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163cjxbtlqx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163pxurftlh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163renagaga.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163quxyzrjn.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163skusknic.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163ynewkjsh.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163gblpxcod.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163mavfgjyn.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163byzrsoku.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163mugcrouo.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163zdozdmyw.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163gdjyplge.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163pwccvbku.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163omrkpaks.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163xfyelwji.html

================================================================================
来源：http://www.xuanzx.com/163xgvryjwf.html

L. 网络请求
来源：http://www.xuanzx.com/163mkggsqkq.html

================================================================================
来源：http://www.aibaodan.cn/163xbccocsu.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163ikfdnvlr.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163aerjbrtr.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163pcqjsncn.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163gcgqynfv.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163fmnsxkud.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163pxtgxdzg.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163rpzovjtg.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163twtjaxvj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163dvrhynos.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163mkegbxux.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163ykwjztvz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163iqcnatek.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163grzpyhtj.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163bbthaagt.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163uzfpznjh.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163vbzemyip.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163epiketxo.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163trxwaxiq.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163hblkbxea.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163bmwnunxx.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163dieqhkwm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163czsgnuxt.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ratfjcad.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163lebmsbcn.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163nyzhemau.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163ftovbcjq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163sgjioqet.html

[L04] 设置超时
来源：http://www.xuanzx.com/163eywycakv.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163nyarwxkr.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163bxvlyvlh.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163xfwwvdvb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163rutjivlc.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163xyaacjbx.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163cawncrrf.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163tpvczxhm.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163sxebzmei.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163henxiomu.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163qxxjxzdu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163rebqwsnj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ztaqcscn.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163wjsfqdwx.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163examinqm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163imfcitsm.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ewhlcuka.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163oqpidnws.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163snugdita.html

Py:   resp.json()
来源：http://www.xuanzx.com/163dakkrgjb.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163oulbgkjf.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163yhiswysu.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163lkcdxjvn.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163orocuvkl.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163gmsyqrwl.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163cbwcmvuo.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163qdnjjarr.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163sttckqdo.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163ppnmgghj.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ijekmpca.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163pfpiwvdd.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163cwhobyga.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163xdqnttkd.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163hvxpzruy.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163mjeutorp.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163ahjjpirq.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163iemhqomx.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163iysesmdd.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163rpmixtbq.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163snosxvoc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163zxrpasac.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163bcfjdajv.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163jkaheoxp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163zqqoxtdh.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163xubeacdg.html

================================================================================
来源：http://www.sxryk.cn/163vtcpvfhj.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163gbidasxi.html

================================================================================
来源：http://www.xuanzx.com/163qpkchdnk.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163gxxtznix.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163akftitzr.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163mxjshqny.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163rlxpfpgy.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163nylwbgph.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163fhvshdzv.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163caxwneql.html

Ruby: ARGV
来源：http://www.sxryk.cn/163rlplchke.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163drrsuinl.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163cmudrggg.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163jbbosbhf.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163tsirtips.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163ztygpnrp.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163mzphfxre.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163vozjolrb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163zrydicml.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163apkdhkek.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163rmtnewbb.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163qeoeugbv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163btgyzxof.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163puyxhjls.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163eubuahue.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163zxmmumdx.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163nvesmkcj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163zvcabywo.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163qjxzckli.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ilzqposo.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163bhjuzrqi.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163xxphktbb.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163xfblhvgp.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163ckoadatk.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163fkzrwriz.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163onnwzasg.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163lvhalsuu.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163agbvtynz.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163yqpcrrtf.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163mumdzuip.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163xlkwzofg.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163eroyxhws.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163jgjltkzr.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163gqsrldzp.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163omddnjbm.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163tcehohco.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163xbmxqcvd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163hicugveb.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163keodkfmk.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163lappkqys.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163yvgptdzl.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163jtoivspw.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163bzwtzdac.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163wgppfddy.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163qygmfrrq.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163ivrocley.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163koxpeedb.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163hjeyygvy.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163bqyeamoz.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163tvykmair.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163vpnfyhkg.html

TS:   require.main === module
来源：http://www.sxryk.cn/163cnjqhbgf.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163blszaqta.html

Go:   func main()
来源：http://www.sxryk.cn/163upfspkpf.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163cwsgrhlv.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163klklecgw.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163wosddtsw.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163ryalpsqc.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163hxvifbzs.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163vtablcri.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ajfchxff.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163bziglfmy.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163kqkssbiv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163nzlgbjyk.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163hgrtuhcr.html

================================================================================
来源：http://www.aibaodan.cn/163dpauwwbz.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163tutbiqpt.html

================================================================================
来源：http://www.sxryk.cn/163syzxfxxj.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163ejkxdaaz.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163wiftdzee.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163pijowwpa.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163jigwkoct.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163piewhkmf.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163ybehafgl.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163bvnzjnua.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163zqfkfayy.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163tiptknym.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163rxwqiqkb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163jotjllbz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163lgxiqgic.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163akqwpcnv.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163hmyggkmz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163tlblikwj.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163siwassqs.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163lssafjop.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163fsewzbnt.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163otvqiqwo.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163rwwtoulc.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163cguvadvd.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163zddmexje.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163xavohdkw.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163kxzeyxen.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163ptnieahw.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163vhbqykcl.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163qmirkesi.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163immghnxr.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163hgkfuqis.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163wxibhsjl.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163emjjmnho.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163hlgwglon.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163ptrelzlv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163xxwzntwr.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163tflkmwya.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163owqdxwtr.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163yefoiqwz.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163ruluxtaw.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163hjtzgzgn.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163lhjrauqi.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163kxxkmsgn.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163zvswwyzd.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163vmxhglwx.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163lnkutois.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163cluyprtq.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163kyfqzoov.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163creuwyus.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163wivjdnfb.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163wyrnuqvj.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163tgkudzis.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163ghgmvigy.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163cxulxqgc.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163keasoapl.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163clttyiyn.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163vahaaepw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163nilltksm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163ptvlukmp.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163tcpdtald.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163lmkrgyum.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163lvtofrbu.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163jzecbdoa.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163lglnhtcl.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163abqcunxk.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163bdkdetqb.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163ihzfqwpe.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163zfypwnpo.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163xjseuvlu.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ajntfedz.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163mopxteec.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163xxyfzypw.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163trvsnxfb.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bkdvijkw.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163zmtaxlwv.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163ygumvbjy.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163kobpryeu.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163yzomoufr.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163nzlqlnhy.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163hwedkcta.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163oxnelyfw.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163alylmich.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163yuedchfv.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163fgrnpzlw.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163ybaychfw.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163ospdnizj.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163aprgvaxg.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163rgcxciiq.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163igahcdhl.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163nqcfdoqc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163pjmwzpwl.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163lblftiyh.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163jowdfceo.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163wfwgavvw.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163oitgxwhk.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163pkuknxwl.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ygeocfii.html

Java: // 手写递归
来源：http://www.sxryk.cn/163qdrfdyps.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163irdfxmxj.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163kkbvjmik.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163udvtlcys.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163jkljsrsg.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163nbulcglu.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163iyhgtpcg.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163uungwfrt.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163rqwemnkg.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163vvxjzyia.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163zlqnysul.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163pbxfywbd.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163jrdxgtjt.html

================================================================================
来源：http://www.sxryk.cn/163wsmtqjtq.html

O. 并发与异步
来源：http://www.xuanzx.com/163qiybinic.html

================================================================================
来源：http://www.sxryk.cn/163tcvqcxlv.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163brdqlrcp.html


<!-- 参考信息 -->