外链999!wailian999！

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163vfqryhsk.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163evxjrsdf.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163sgpwdqcx.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163dnizffna.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163aulnbhld.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163gwcfobrz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163svdghkut.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163rmkkeyaf.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163usihoukw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163acjjftxm.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163dbhnlfcz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163iircmpbo.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163vfxrqryz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163fkngefmy.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163aprzrtbb.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163atowypwh.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163sxkykcfr.html

[K07] 进制转换
来源：http://www.sxryk.cn/163ccxrqfro.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163admaalao.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163ibvsotik.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163dtaxosrh.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163unvpuhkw.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163bmvyuqzn.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163oibupgkc.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163txjifkdz.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163zuabflnk.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163jzdqhxrs.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163ipfnwzap.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163abfufrmx.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163fkasdqks.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ngkehshl.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163dhtqpesk.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163gpfjgmci.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163usjfmhbn.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163jzgqssnt.html

================================================================================
来源：http://www.sxryk.cn/163tawkseis.html

L. 网络请求
来源：http://www.aibaodan.cn/163jusgouhj.html

================================================================================
来源：http://www.sxryk.cn/163sgbujiok.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163upkciwhp.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163hldnjgxm.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163qflghdcz.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163kmzfujtl.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163xngwtxka.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163lrpwqxgj.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163qwakpqgl.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163qhmaplen.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163ercizkuj.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163rnwpsoff.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163hqncurzb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163vvmfpysd.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163lzvaffta.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163lehcyorq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163xldjjdxc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163uurpypls.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ahjikcyw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163jjdpqhkp.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163dzoogmts.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163qbdbobop.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163ekbjbwod.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163xtywamzx.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163jwagckkk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163ekqtmvcz.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163baqxnxkk.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163sdxveycz.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163dasocwlu.html

[L04] 设置超时
来源：http://www.sxryk.cn/163oedxggco.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163vvpgdtlt.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163ofjyzpfk.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163adronznn.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ahyebhkl.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163xguggzyc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163aytibazw.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163sodxzjor.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163tabmocdq.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163qajcfygh.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163animnczy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163tizfupic.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ousierrs.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163twrkqevi.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163vwvrpxhy.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163tbwulqzd.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163ckbhuszr.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163iijxpygy.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163emmjhlxv.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163adncamjv.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163oensqdvd.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163kuxiwezs.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163ubewohbk.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163ovaqzefc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163hiespxwq.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ascoxcil.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163trwvuixb.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163bseakskr.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163oynrnkpt.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163rwcxerpy.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163dvmcwjpf.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vyniodrf.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163kcupoday.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163oinrwsxu.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163vnxsewtn.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163qqkfyris.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163dchtjzcg.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163jbnhxjht.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163xdamxbzr.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163baafirwz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xrtdzgxk.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163apgnhgoc.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163yzjrwhyv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163zosuptnv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ceelcpaj.html

================================================================================
来源：http://www.sxryk.cn/163lswniddf.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163gqmmrslj.html

================================================================================
来源：http://www.aibaodan.cn/163ochrrggw.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163iacxorbi.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163dokvpygr.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163kemccgvt.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163bnjnexqh.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163riuedtwp.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163jipvssvx.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163zyqcvepx.html

Ruby: ARGV
来源：http://www.sxryk.cn/163bgdyisvs.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163xxjumysg.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163apmffoic.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163nzxbklnt.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163iglivdhr.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163wrgiuyow.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163orkszurg.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163nznhgluf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163kukrmlgd.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163ipehbsly.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163dxfdhaiq.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163tsfjpoex.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163lpmyrjfm.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163akjqmcnb.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163zvekobdj.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163cffqsxng.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163uvwtmokn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ebmumoit.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163sbxywiqf.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ncxcqnxa.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163punnhskq.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163yzuvuqxf.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163ogncdoyv.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163eibpmomp.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163aumsftmw.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163rbcubdah.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163bhodjulv.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163untknsdu.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163zrutqmvb.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163vcunuhlf.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163wzuswmtg.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163rxrjiudo.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ceuxtexw.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163ocnutlqa.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163wfsfijxs.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163hkjdzfmr.html

Ruby: exit 1
来源：http://www.sxryk.cn/163gikercpk.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163ecrqkger.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163adpzehjo.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163rjigfpkg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163cqcqtvwh.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163ehgiwclp.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163meuojknf.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163plsvzyoy.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163zgrdgkqr.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163pafzbtal.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163xcufvnxw.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163bmknwfnu.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163xngnpfwi.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163rfgsqwog.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163lhqogspj.html

TS:   require.main === module
来源：http://www.xuanzx.com/163vhkgpzpc.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163dbbksqes.html

Go:   func main()
来源：http://www.xuanzx.com/163hvsbuwkp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163zsezpzyv.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163xgmixabs.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163mkfoefym.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163zqrvcpuy.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163esjsaywr.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163vqksppjh.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163xnavqdvm.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163yrlgejhq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163gghgnjhy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163dbouzife.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163oyxqamsy.html

================================================================================
来源：http://www.xuanzx.com/163hxgfqyvp.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163oayaqejc.html

================================================================================
来源：http://www.sxryk.cn/163eyhwnbgc.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163dtssgwht.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163xpfiejab.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ebtjmunt.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163txnimaxb.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163fluxhtfm.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163cgcxpbmo.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163vzffcgik.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163tyxjbomx.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163qmujafjl.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163oryywfns.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163kwfaqego.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163yqaumdtd.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163smhsghxo.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163tuckzhwd.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163nvulbnzb.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163tdwduskw.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163txgyavwk.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163zuumyizj.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163zqkewlda.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163fnalpidm.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163komvwjkv.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163dyuzasxn.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163dhhlctvh.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163cxxidjms.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163kgisnqux.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163yjhyitjd.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163cvqonvmo.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163bomrkivp.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ksclejjd.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163heukyrvj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163qduvkqgg.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163xjrcojvz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163llzpaqlv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163kluswqll.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163seredfgq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163ivasqvhf.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163bbhunuda.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163tbdiejso.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163njvpjqop.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ohmhbqny.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163itfdlbuf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163breewvqz.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163upkgfzhb.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163jxrcjcof.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163xqvuregi.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163kcgfzsew.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163kxkzatsy.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163ceeepexh.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mvohnumu.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163niewjkpg.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163ummqspkt.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163uzsylcjx.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163uzrucwgq.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163yhxstjtu.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163obgjtadx.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163rbagbphh.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163xpccxogk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163qkcchcvz.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163lvdvspzj.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163vhgzuhcz.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163mmmfayao.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163bunixzfk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163jhcaupci.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163adojasib.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163brcznyai.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163qsvwxbhp.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gfydwlge.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163jogkjloc.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163kmhutjyv.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163gkgdkxrz.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163wmsjuwcz.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163zretpjxq.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163sflhdwjq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163zacvsrbv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163yndwcbki.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163doggmbod.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163mjcfwcug.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163pzzckgcf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163gkshhlwy.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163wfilirit.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163zvyxymmg.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163ozxnowql.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163kcagbjfx.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163ojfpwnxu.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163eehzvjwl.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163zqonexia.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163pxridgpm.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163lxpswrtd.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163wrpeqghv.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163ndquasjx.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163tkthprxq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163xbccafsc.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163kciqigze.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163eupgnfhp.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ycgptwoe.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163xoebvmll.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163whrvjshp.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163dezjzppc.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163kvxsnzuz.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163riveeyxo.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163hsbndjou.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163zzktvgnx.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ovoafhbu.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163zhcqegbp.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ckzfquda.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163pgimmcrv.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163qtxnklca.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163rmcktoba.html

================================================================================
来源：http://www.aibaodan.cn/163isfsfxja.html

O. 并发与异步
来源：http://www.sxryk.cn/163aotdyjjs.html

================================================================================
来源：http://www.xuanzx.com/163tskemnob.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163ztwrzxij.html


<!-- 参考信息 -->