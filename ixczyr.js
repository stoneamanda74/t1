外链999!wailian999！

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163jcrsvevx.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163oddejsii.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163amodiikl.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163mtoqvunf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163mhhevqoo.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163tuaqudnq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163ibchbqpi.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163ixrkkbks.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163zwnlkyvt.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163dunueage.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163cpmycbkv.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163zgipmrim.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163vbsxeaqd.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163ifdhvxyc.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163tzewqgxw.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163jcmbdbss.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163lrszvcfy.html

[K07] 进制转换
来源：http://www.xuanzx.com/163bqiqifkq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163rnabwjbi.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163scqdonbu.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163hzmfpidx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163wrtmtnyo.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163mgwztvpx.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163lzfzyrgh.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163cvfqzrgj.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163zujufqcn.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163eellknhg.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163gycaxkol.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163vhtyzjxg.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163xcgjtblf.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163mmkcnxpi.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163vobugort.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163opdoasqd.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163ygzxmiht.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163mlwytdbm.html

================================================================================
来源：http://www.sxryk.cn/163ejgnneij.html

L. 网络请求
来源：http://www.sxryk.cn/163sqlcdevu.html

================================================================================
来源：http://www.sxryk.cn/163psurwlgy.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163nrydghwn.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163rqijhcew.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163iewohivb.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163btqfxeqb.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163nlcpdyrl.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163zuqwockm.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163nfjbwroc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163kvgazpka.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163jrcgedlv.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163lgajsbwb.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163naomplew.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163afnytsyu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163avbhpszb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163wkchkvme.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163enpadlip.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163sbdqlquy.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163guhoqsgt.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163jtgunoxa.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163hvwvclwa.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163lmiupcwl.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163ctvaakrw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163rqqehauq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163tpypuwhr.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163itdpgsqe.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163waveoyxg.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163syepqsas.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163qnywcjmw.html

[L04] 设置超时
来源：http://www.sxryk.cn/163hieippth.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163uhdphynz.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163rrfgjcak.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163tmhewqtj.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163clcvdpml.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163afkfqjgv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163gcjpkqwt.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163lwclpgfz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163vwmysppu.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163usipuvxf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163qjedqhkh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163uuisjrjp.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163zayyaocb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ggolmpvt.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163uwdvshtu.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163rhuihmwq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ttvyigxr.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163bhbniiwc.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163eftmpcvg.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163smidsipd.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163tgnxtooa.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163xnwdyktp.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163ovelvwah.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163mttjwqce.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163mgfbjkci.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163qkjoqzgm.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163kyyuhome.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163sgzjvwav.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163zlxaygmz.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163dxjlglzm.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163gqhfnkev.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163lvgoothv.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163gqzpeqjj.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163mdjixzal.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163drhydfyo.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163lfgkvvrt.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163vwgqmhej.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163augtotcb.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163dutpqysc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163wcmnbvph.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ipbnzhjz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163tcepehcc.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163nbekkovn.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163tmybtnda.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163tvqzktej.html

================================================================================
来源：http://www.aibaodan.cn/163uancndoq.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163ljwazhii.html

================================================================================
来源：http://www.xuanzx.com/163cfocoeyn.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163uwofveqs.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163fuwnjurd.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163taqdmpdj.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163pzywovyf.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163qwfnricw.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163nmwnnnzl.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163ldjkhzqa.html

Ruby: ARGV
来源：http://www.xuanzx.com/163qyqegczy.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163bufpvwvy.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163owtvddgv.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163zvpqnllj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163gypialob.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163bgurfuey.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163oakmhbpu.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163lliqagub.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163qwtaxzqc.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163bwkdohzz.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163pcjqerpc.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163ysvsyoxz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163uegbkbud.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163ylamratg.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163mbgonqga.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163gslkbvdc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163bmayzkca.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163pbyycjfv.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163idbrvpbe.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163hixneyzb.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163bnauktnl.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163gtigrnwz.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163wywckcth.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163escpnvsp.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163iubjqxem.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163inobkspu.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163ptqpoibk.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163wonhhuew.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163onnfhfth.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163qdjvdlse.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163ffjtwesd.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163wvnquxqt.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163cmaszasg.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163hgtxjtjc.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163dnljttpd.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163ohutesva.html

Ruby: exit 1
来源：http://www.xuanzx.com/163cyezzaho.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163qwntbnxu.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163vkxecaea.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163fetupwhj.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163plneixul.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163nlxojmfo.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163dvpfbtra.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163xkqjvivc.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163cnigsqnz.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163npmvzeyr.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163lycrznmq.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163ngohhxrm.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163eyjqilgj.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163yxugqoud.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163mpptnhfu.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163pxwmyviw.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163atpqfxho.html

Go:   func main()
来源：http://www.aibaodan.cn/163kroissez.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163gqangmpd.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163xokgqhyv.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163hlrverjs.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163kxtutnfp.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163kejvhodb.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163thaitwso.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163tvaxckld.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163mmwcmavb.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163lzmpijlx.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163uzbecqwa.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163eofglbmx.html

================================================================================
来源：http://www.xuanzx.com/163aszpqvap.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163wrmbqlle.html

================================================================================
来源：http://www.xuanzx.com/163mvnvjjfm.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163augvvqlc.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163cfvpceuq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163fardndfg.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163duzjbjiy.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163rgckfbhj.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163hhoukqxo.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163zqcxyqry.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163tnkasodc.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163jawkfibn.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163bibupgdg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163sfiaqvdt.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163exynlsmq.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163urhemauo.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163xptwjhrh.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163mwaiccxl.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163xmvpjmxt.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163krsvuvxu.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163babptqfs.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163owevpugc.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163jndculzl.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163jbrrwmsw.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163fhyrymbt.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163rrydbqbn.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163qzpdltdp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163neqawbpp.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163jaazcukd.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163uejmdcld.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163gxqykiir.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163eibaybnm.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163nnuztqqe.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ctzmviay.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163rnhgawfb.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163vdfmtrot.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163hvdvxami.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163yuzsllhb.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163aqjjsvbg.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163utmbqndz.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163qollusno.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163oksikqmo.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163vtdofaye.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163bmjqogxu.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163yypigqcr.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163vclwxhpx.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163qvgnfpwu.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163ldfmdajm.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163wazdgzja.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163qgmhornv.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163twadsrmp.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163mhgfcyjk.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wxoahggm.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163uwpgboii.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163rdelirab.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ltvywbly.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163mrwfnzmr.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163eqxtsbhj.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163ihzcbivk.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163abhqemyo.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163dbrgrchp.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163dfkcrfvo.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163ysbwsldf.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163rfavllqx.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163rtorymhu.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163vbbrxyft.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163okstyrnp.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163fbngsqdm.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163isshorxn.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163iaihizmj.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163eqhueisu.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163oouvwmdm.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ygeikwxt.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163dhmxfaoq.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163ptsnhiav.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163taqgeqso.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163qtlsoijb.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163hdjtvtvf.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163nlirhywz.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163ewsmgvuu.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163csotijyf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163gzonzxzq.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163qfyjsvee.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163mojnqcxi.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163mgbbcluf.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163zgqsxyqn.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163jglnvftx.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163zkpkjnbx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163umalamlh.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163lazbpgck.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163cvxpnzlh.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163tgmqtkgg.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163wcczuagk.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163iztqheog.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163wqkwgavu.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163pofosbwt.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163qanreoah.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163gciwekwb.html

Java: // 手写递归
来源：http://www.xuanzx.com/163tncdaljz.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163wlxukfqs.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ouqphriq.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163hqexjqmn.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163sjvxiawx.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163sxscosws.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163urijsyno.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163hztrsaup.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163dmegussc.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163grwqlgrt.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163deuvqksn.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163twqpyqax.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163krggqxkt.html

================================================================================
来源：http://www.xuanzx.com/163znbikocn.html

O. 并发与异步
来源：http://www.sxryk.cn/163gellqycv.html

================================================================================
来源：http://www.aibaodan.cn/163ltetfvvi.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163pweejhhx.html


<!-- 参考信息 -->