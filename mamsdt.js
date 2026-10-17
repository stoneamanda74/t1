外链999!wailian999！

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163iikyydij.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163qjapxdtx.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163mdmztxkv.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163pjuwxxzj.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ghgwrrwx.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163tbdkxbdz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163banuzutw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163jutqsdav.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163pqyckltn.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163aiaofpbw.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163dcdiqvob.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163bulmwurd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163wkdzsfbq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163prwghyhm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163mxzkqbck.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163oqqintef.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163rhzkdzic.html

[K07] 进制转换
来源：http://www.xuanzx.com/163azwjrpmk.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163tjiumxrz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163rnwqacti.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163unzghuuc.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163dmvdsfbt.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163bdiceddm.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163ymixwjgo.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163unlbdqvg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163bwcantzb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163qohocoyu.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163breqjcmc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163fwmlaljq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163qegmwqsq.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163gcxpjkwz.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163hxfglcwd.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163iwdasldv.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163wccdqcwe.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163vrmwtxor.html

================================================================================
来源：http://www.aibaodan.cn/163xhkjcbet.html

L. 网络请求
来源：http://www.xuanzx.com/163rfsxjgit.html

================================================================================
来源：http://www.sxryk.cn/163jbyzbdrv.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163chosdudc.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163flixdwmn.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ickicyyg.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163edpwhqgo.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163fstvrotr.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163tpfgzarl.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163wbzcgcsb.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163vaeepyzz.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163wttcrsne.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163hirbtrrc.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163bflejkct.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163yiyvmzuw.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163iotlkdnk.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163afnrqqdi.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163mdxhxhnd.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163pzzrigtc.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163vxltwohu.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163wxlfkmyw.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163qkbtewwy.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163kkmeyzaj.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163gbjrfvzc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163npzlafau.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163txnkccbf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163qvjtrrwa.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163slmppzli.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163ujjzrdol.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163fqfxukxi.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163cfjtcrts.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163ohdmmggw.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163mjsgptbe.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ydpudpzi.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163jzfgfyig.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163garducfb.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163rjbsgoml.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163wctojgtm.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163tzbmhyiu.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163uqrepvpn.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163uwihahfj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163cavjfbhg.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163wqpziibq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163cnroervb.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163pddccesj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163hhhlipfr.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163xolescih.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163vygkislu.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163zkzefprh.html

Py:   resp.json()
来源：http://www.xuanzx.com/163ysixjmyl.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163eenmsuel.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163wlerjfty.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163aoyzzjra.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163namfvbvm.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163xiosdeik.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163wpoffwed.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163lwgyyeas.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163mgwdsbau.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163egztocyo.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163ggdmwdgf.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163jhtecxko.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163tymlothl.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163dxfhsgeo.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163hqbiubdu.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163odftdysn.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163rswgewnr.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163mvsdekmo.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163gnakublx.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163newtolyo.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163kllsaulz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163hqiwtnqa.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163osnqmzdf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163yfzkncid.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163ntxjghyg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163eazcdxvb.html

================================================================================
来源：http://www.xuanzx.com/163dxfidyzv.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163udvosyqa.html

================================================================================
来源：http://www.sxryk.cn/163wheqrzar.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163ofkoqdsa.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163linwekcc.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163hwpoxhfu.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163unmvomnr.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ihisfusm.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163uyaweloy.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163tbodoadz.html

Ruby: ARGV
来源：http://www.sxryk.cn/163avkpfqbw.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163nnqftvpt.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163nvzbxklu.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163lobmngjb.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163ekuuhhgc.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163qzyjbpmg.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163yzygmjcf.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163toljrgwf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163igplfczs.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163uwdlbaph.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163uxyvmdwf.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163blbaiivs.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163jbiybkmx.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163jtmmoxkf.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163eahwreqt.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ssklxsmd.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163vsuphoqd.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163kuivrynw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163eowytspv.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163beqdaytw.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163bksxipsv.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163lhweugbo.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163ncidwrxy.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163cobrqfbr.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163bwfsddiu.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163fcfvbnhk.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163ijxazmqn.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163kfnbjkqz.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163wuyehupi.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163klfzzokm.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163bazjgcfw.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163orrujipl.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163kbbkgpob.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163cwjtbotw.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163xaesdokj.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163qawcauix.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163horahofa.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163gnpvderb.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163lgfizynq.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163vboiqrib.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163bsqjrvma.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163tdetnnku.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163mfopcbie.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163xvxtjhqo.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163kbotktsm.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163cnxxjqkq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163dtbgmmie.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163tzuddibq.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163wdfcvfqw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163crhygmmy.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163tzsmdwjc.html

TS:   require.main === module
来源：http://www.sxryk.cn/163kobkpbaj.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163fsdvympj.html

Go:   func main()
来源：http://www.xuanzx.com/163kypxvhmm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163jerjxins.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163wccxjjsf.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163wlzomaww.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163rqmhzete.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163jtpyzsxo.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163wbsncvip.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163jdilfhif.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163krxvqyms.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163xuhsewuf.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163rzjlsjry.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163lvaxzvjj.html

================================================================================
来源：http://www.aibaodan.cn/163miriqlep.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163lvsgwoxb.html

================================================================================
来源：http://www.sxryk.cn/163kqmyzwie.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163hnjgeweb.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163krrvcstd.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163kibpxmru.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163bnocowra.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163fxkktasb.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163icrccnqd.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163cklzcpxl.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163urbqrtfg.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163dshcufaq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163eadbgsrh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163cxzzeqhu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163mofsirmb.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163txnvdyup.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163nxcfslmn.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163mggryysd.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163dyyydnja.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163cfaedkwt.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163eqicpdgd.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163zfycmmly.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163flvkwkky.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163zlspjubz.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163yzgfudeq.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163liasimxr.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163atinwbja.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163lbgpccoi.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163kcguxpoc.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163fkkqukbw.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163lnbfyghe.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163kudzpgqh.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163viucblrx.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163dmfemvra.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163helpdxcn.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163mvxrafqu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163lelupgdq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163iixdewcm.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163nzdswrkx.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163pyvcgjos.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163ntwlqlfk.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163xtsyncpx.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163xylbfzqp.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163gccepxkp.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163pudwxakr.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163ubzcmrun.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163iuexttln.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163dndyolvp.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163hsbzpcxs.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163cqwvigsp.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163kywwtsjf.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163patfdats.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163zctjlrec.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163rsfjyrdt.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163davkrpih.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163cjhhqfgf.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163rmyoqzwx.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163hstaevlc.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163vrttjebj.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163iccegpfg.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163rzojdxjl.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163cutqahlw.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163exjetset.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163mnkiiusm.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163ehhqkcld.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163ssdgrzuu.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163grihizvs.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163zvxbrjup.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163muicimnq.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163mjpwgyih.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wxawzuzh.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163nalscvwi.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163kfbrunlj.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163txjogcfj.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163ipiqmmdx.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163ycuivncm.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163fdgdgzkw.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163xazgevex.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163dllnrzad.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163kukkyurg.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163flcgzvvp.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163jnmslpfm.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163woilhpsf.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163ssejrfok.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163rchlhsne.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163ieiuvjpj.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163poqsprfq.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163bhrzhmts.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163efatkatj.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163tidtfsfi.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163vcryebni.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163fzvuowut.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163chgyuzce.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163zcalrpos.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163aaukjdvp.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163assniote.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163wdvlljom.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163sfvdpzmi.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163wrufsyze.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163xktmvoqi.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163bhufquvi.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163czmjiqwm.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163wllqvgmi.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163pbgesucd.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163rxdyzdwd.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163euaatfqy.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163hoffmyeo.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163jbmkpmsg.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163kqvjuwbz.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163cfyckpzs.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163oqjjhkcb.html

================================================================================
来源：http://www.xuanzx.com/163rzpgchpa.html

O. 并发与异步
来源：http://www.aibaodan.cn/163gqktpdne.html

================================================================================
来源：http://www.aibaodan.cn/163xizgbjei.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163djlsyxgl.html


<!-- 参考信息 -->