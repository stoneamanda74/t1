外链999!wailian999！

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163pvcmgjkh.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163ghbhnyhz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163kmsiepde.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163hnploebt.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163akrimcls.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163evzjuvij.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163aciicqaf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163paxcebvb.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163smmrcwhv.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163yzgoceum.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163fiomulhx.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163gcqpyslb.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163opmkcrcb.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163nnbmuatg.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163swsojbdn.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163annudkkc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163mjlzkjzr.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ktqztowz.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163tszrdyhg.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163zqzvjncv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163lpdrscxm.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163iiuvaynd.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163prpdctpm.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163llxqatei.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163yhbvfssu.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163iammzeta.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ixsoptcz.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163aoznhdbp.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ucpxckem.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163orxhygkp.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ignxhafn.html

================================================================================
来源：http://www.sxryk.cn/163wrprcuor.html

L. 网络请求
来源：http://www.aibaodan.cn/163dujikuxx.html

================================================================================
来源：http://www.aibaodan.cn/163grgbsiqp.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163dqwfudjk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163mdlvejam.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163exmxtrtm.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163lrqtvuyd.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163pxvgxcgk.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163uloojxug.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163qomgbhat.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163kngfqotq.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163dcreuvwk.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163shhzofmp.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163jjkikrlk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163khfnhujp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163kgkekbfk.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163rszdmlxt.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163hpbyvnjg.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163blrkwrcn.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ckjueytz.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163izgcbyxk.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163cwrucqow.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163yletsylj.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163hojvtjqe.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163irsrqmbx.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163zbendwsz.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163qelqqmtl.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163zvbmewzd.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163facyatow.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163lvjoxdez.html

[L04] 设置超时
来源：http://www.xuanzx.com/163bqaxicsw.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163yqqlfodd.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163ktujamxh.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ersldkfu.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163rbbnxkng.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163oluvnopy.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163pbdefejg.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163hthbbdkf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163rulwplpo.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163jgfclysx.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163tobplbjr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163igyermfh.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163epmprlom.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163mnnuqnzn.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163ywyhruep.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163imxhjsxa.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163qfxhxykp.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163lebdhghx.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163wxegvrks.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163nmfqwvki.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163aebwmygp.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163hdtmgvff.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163hjhsonvj.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163rcmznzuv.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163xjkjnfii.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163jyzookhk.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163ldhwczke.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163yfckjsqq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163essbcguf.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163zpoeffoj.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163bqiawxkj.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163nizjidri.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163prhltcra.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163lkpxcdrb.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163uqumfayf.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163llscsgdf.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163ymzhqqps.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163yzwgjodl.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163ndgeoldk.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ugjyfavr.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163pljhmkjo.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163frmswsnb.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163vkwgkmww.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163caawqunk.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163okhjwfin.html

================================================================================
来源：http://www.sxryk.cn/163efgmjquw.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163nodqtjgq.html

================================================================================
来源：http://www.xuanzx.com/163njpknyoy.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163osdfqtvx.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163kbomujil.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163bgpvyuyk.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163wwbzxfsi.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163csjbasuw.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163zhoilrnu.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163llogzxnm.html

Ruby: ARGV
来源：http://www.xuanzx.com/163eisspuny.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163ryjttdji.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163uvoeoebt.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163foujdspw.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163rhtwmsrc.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163bcomgyek.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163daosxdea.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163iamledgh.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163yvoaolgj.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ezxhporn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163lrixfsmz.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163zvbxshsj.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163pmugngiz.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163nwhqtfvz.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163cuskfzpz.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163xyinvfon.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163atemquqt.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163nygckhzj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163fcgawsbr.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163ocbeyorb.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163ufgymtel.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163cpyuvxzi.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163wwdecemi.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163aosfpugt.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163tkwnwiza.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163sgwhotsc.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163hsrmnklx.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163tuqyuvjz.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163prejsepj.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ctbwdttb.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163kziypysd.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163vbtjgwnu.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163yyuubvrs.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163jwmkronr.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163qpwoguyo.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163jaqldmpp.html

Ruby: exit 1
来源：http://www.sxryk.cn/163jmccfeqq.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163ykjcjwla.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163kdmfoqzm.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163upqhtakw.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163qcndlhah.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163spbsywej.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163gbqivebb.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163mdpkryen.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163tbmrcvto.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163slwdybii.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163qtxktmbd.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163hdgwelfb.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163mzyxsgrm.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163hovmwwri.html

JS:   require.main === module
来源：http://www.sxryk.cn/163mpdipgvy.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163rjabdsqt.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163gbbmkpqc.html

Go:   func main()
来源：http://www.sxryk.cn/163cpnigfhx.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163xnlmtgnn.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163hstsmhrz.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163ylaldprj.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163qilfexpg.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163xezkzkpl.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163qqvkihgb.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ppzzznpa.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163iicnzhkt.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163ktxnxuqn.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163pocgekdz.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163rotdnksy.html

================================================================================
来源：http://www.aibaodan.cn/163gbmonpdt.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ktnuxssn.html

================================================================================
来源：http://www.sxryk.cn/163yqazbtpo.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163rysiqqpa.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163thualnnx.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163oebgkrjv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ppzvjkgq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163kxsuhpeu.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163kntqhdri.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163ixvtahlp.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163ikehfyxf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163thyjkadf.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163kobbpdod.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163lurqzehh.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163jqgmppub.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163juwvzsra.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163snvrohau.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163feyhhggn.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163tcwtolvf.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163nbfykhdv.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163wnbixrbe.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163yiaobhiv.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163ctiybcde.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163zrbizirv.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ydeahdob.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163lgfrtmbz.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163azwaelyz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163nlfhddeq.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163msjwsbnj.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163tnrshtmo.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163xlaslwgt.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163wsyxdbkp.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163tbbdxmmz.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163trhwfgyc.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163scxumsdc.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163gwuumjbx.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163sebtfmvs.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163wqgtafia.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163udtuuuvf.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163ncfwivio.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163sabschst.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163dyizckbt.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163hcuukkzm.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163rppduvyo.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163voqqbauo.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163wihmollh.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163qcugdurp.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163kbrqzgoz.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163izgszgtz.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163pyttlqfi.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163edmiyzmj.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163gncqzbmx.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wobqdvja.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163ahygpbgq.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163ahisidro.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163yqmvhhll.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ujevczyt.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163vcofioaq.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163jvvlamgs.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163cibygplc.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163gdabjdex.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163lzekkprq.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163zabkvzny.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163mqekikub.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163lwvzuube.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163cqtrclia.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163vzmjtixm.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163xdyuktlv.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163qxlesnvb.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163obciffbd.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163slkgsvde.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163nxjptaqn.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163lpafrssi.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163opzlfdmd.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163deaonzvd.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163uoikxfez.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163qzbnjccw.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163hqdralfl.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163hhnsyqyg.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163aemruymj.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163afsdzpjs.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163atcoamcf.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163bxuexefz.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163gwluhdsw.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163jsdwufjt.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163osohiohx.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163bigigrcx.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163alalsogp.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163pnrousof.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163wavcjbzt.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163eunenlqz.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163bglbojfc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163gebbiflx.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163qhxfdumj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163jjqggczl.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163dnitbcqu.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163bxfafwaj.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163fjoyzqpc.html

Java: // 手写递归
来源：http://www.sxryk.cn/163xblniziw.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163jssdpkty.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163ujqdizdn.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163pchxlixq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163wrulzkcv.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163ukogjzsq.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163dpimocsv.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ydjvshvp.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163abqeitmx.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ihskwzxi.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163bmrqetak.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163jbejvduv.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163opbokaub.html

================================================================================
来源：http://www.xuanzx.com/163wmtvmgbr.html

O. 并发与异步
来源：http://www.xuanzx.com/163jzqnxzjd.html

================================================================================
来源：http://www.sxryk.cn/163redhxemf.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163fkwqvfsb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163hosvntxc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163jhjafhms.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163jyvcdojc.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163pxbcbsnx.html


<!-- 参考信息 -->