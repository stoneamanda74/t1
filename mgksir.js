外链999!wailian999！

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163paxoudxs.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ijbcmjhy.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ymzegilx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163ciciopvb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163unuwpltk.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163gwyliwvd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163yzkzqybr.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163fhrcmvbp.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163lfrzneho.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163mpmxmrrl.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163kmdjotzn.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163nhvywebc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163secbmkqb.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163bxmxidqe.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163vgibkvnn.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163tgiswgwi.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163iszxbeav.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163wrxikcrm.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163pmeiqwob.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ouucnfdy.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163rtagvtte.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163rlyivgnb.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163jqdoqqpm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163rhowcmua.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163kxwubomm.html

[K07] 进制转换
来源：http://www.xuanzx.com/163amwhzzcn.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163anfqgqph.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163jhpwgens.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ctdulljp.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163upkfirzd.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163zoqcwxki.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163uixmipqm.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163mhfqnwtk.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163alzcogku.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163cmjhapuj.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163hysufgoj.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163chlpvczd.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163vaiozslk.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163thbasxqv.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163kjuwaujo.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163wgheaofx.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163sbvlqyej.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163wyjugxkg.html

================================================================================
来源：http://www.aibaodan.cn/163gablklud.html

L. 网络请求
来源：http://www.sxryk.cn/163qqceefbv.html

================================================================================
来源：http://www.aibaodan.cn/163sruoqqpl.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163ohocaqut.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163bfgcmcwy.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163uxenkxab.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163csqoxgeu.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163ujvpbeik.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163yuckjcth.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163drjzldum.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163jzjyfxiu.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163eqlogntx.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163roeznjdl.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163xjytvcwl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163ugmgaxtd.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ocqkacdi.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163qwnradsm.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163gdnwxfun.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163nzoxdwfb.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163jgharvki.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163jrgvtixx.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163looseehu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163itadewdk.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163sxnqihnx.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163rxxjucnu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163oashezvb.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163wwtnjaxk.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163lodunsxr.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163nhsjvciu.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163bzumzyqg.html

[L04] 设置超时
来源：http://www.xuanzx.com/163qlswzdhn.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163clzdzoqa.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163uhagyktd.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163fijonrst.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163qpdmynns.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163hkocogeo.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163mbvxiiym.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163ozfhnzez.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163xxxevrxh.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163hnzbaikg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163psohudum.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163nzeyhfum.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163hubmxplb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163jooxwosw.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163nsarpqdu.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163wtubuxvh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163fgtmyych.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163mktdrxmg.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163zukuwtlg.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163sgzgzydp.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163ctdulirl.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163owgeuaaw.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163zvtfzlgc.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163lpkuvzvc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163cwitjswl.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163woivwtip.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163nlspruxz.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163eotibdgh.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163usrnqmcx.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163mnhdlwom.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163vhnspncz.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163dznilkix.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163wccstuky.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163srreedaj.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163iofbnjnt.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163sibjumlj.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163hkboyfss.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163lkljflxk.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163vwnxdfwm.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163mbtrrrna.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ptdvygov.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ijzaexal.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163vgjfmysl.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163zzxcxqxe.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163puvnusiz.html

================================================================================
来源：http://www.xuanzx.com/163syittwcg.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163dqnonfap.html

================================================================================
来源：http://www.xuanzx.com/163zwfizmhg.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ezskmejg.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163ncdvrbvf.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163bpkbbwue.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163vccskztn.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ivpdyrth.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163bitvfnur.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163ytudszst.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163avxbykwm.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163yrcbkiuy.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163muaygkki.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163tozzshfn.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163espotcps.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163foxbauav.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163muacrxky.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163jnlppgks.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163emfpmvnk.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163jljqbsqk.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163qhariipd.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163ehewunjj.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163aloosnzf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163fdgmxxkt.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163myirgatq.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163aegfhdet.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163zfjpdnjn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163etemqklm.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163iojiaofi.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163lmkjafjp.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163gamsgqzr.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163qcarlxbh.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ojatbmug.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163xiwqtjes.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163dbwvztfu.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163vzcqxepe.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163kfsjttkx.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163xcbvupuu.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163kpkwaswp.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163naplnhqn.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163ncajqhit.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163honilndk.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163fmrxdldu.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163fzkriseu.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163diplgkba.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163omhebhlt.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163fuohfnon.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163bdeskdyp.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163jilnqkxt.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163gwquotyq.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163focobkok.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ddyerbci.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163wqfqsxxx.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163lrecbceq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163kszneocp.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163ikqnaizq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163dykrdisn.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163vrxmebma.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163vitlytpx.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163jxmzmvbp.html

JS:   require.main === module
来源：http://www.xuanzx.com/163lprzsmlc.html

TS:   require.main === module
来源：http://www.sxryk.cn/163aeyxnknq.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163omzvxcws.html

Go:   func main()
来源：http://www.aibaodan.cn/163mmlqmuwu.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163xvmkofwu.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163abhehsqq.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163egkhahvt.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163wdhqnekw.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163svbhvvcr.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163lwmdpflx.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163nocetkfz.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163ywvnpuph.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163lfrwhtwp.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163gmzqplso.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163sfnohxnb.html

================================================================================
来源：http://www.aibaodan.cn/163wkxpdioy.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163wkiwojai.html

================================================================================
来源：http://www.sxryk.cn/163ylhijgtr.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163kjkdopdu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163vyyxmcqt.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163nkmfcaah.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163tljbpjbk.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ywfgthdy.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163ptfortld.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163adobvjyg.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163flpfsrkf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163odqeknit.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163xroofaer.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163maimvdwh.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163xmzhousc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163jtilpsym.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163uidlslyv.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ucuetvmp.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ajzigsij.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163evyyzztq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163aieudoev.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163wixylgzk.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163mlpveirj.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163dycsldgt.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163bkcczvcm.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163umsinypb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163oyiqvziv.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163fxgslmbf.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163mftvbxsn.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163bpormqii.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163qdtpmcud.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163tiokefsp.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163gwbgidji.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163rgcsaord.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163tklumjuj.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163mihowggw.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163tdacthuv.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163khbekbuq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163tjnrkgqv.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163xtxwwivo.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163drajhvks.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163uovwotge.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163sfafuhym.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163kbsyvimi.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163yamyjady.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163shobuaze.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163rrnvamgb.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163dfqpeccp.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163tztwlwkb.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163zuuruhue.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163tjrwtfvf.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163xobtjaxl.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163znauoupu.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163eoccnbhp.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163oxzezkah.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163godbfznv.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163arwnphwt.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163uzucvxzb.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163zohqhdbq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163pesfpjsl.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163xprfhzmj.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163gatzrtsk.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163jvpxinqx.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163lgozhytv.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163zptmmftx.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163vuhjqjup.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163cycukjor.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163tibtebax.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163iyfsiwwx.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163isboviep.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163opbnjppq.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163mcnvytcp.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163oblpyrma.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163inhjphgx.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xbpnohil.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163bdkfioey.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163azixlrdd.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163tyylbifd.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163qpcagwrg.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163yetlggrx.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163jhuttgag.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163zatmwtzz.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163sjhcqwhf.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163smozydoj.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163usudnxnv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163vxtpvnqu.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163drxszmmi.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163abmehbko.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163laaodtrw.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163luclewma.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163khqadtrc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163szwcgexy.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163ofjuybhb.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163nvbqqwyw.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163zyfauufa.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163eembfcvt.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163yghvdsda.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163pesqhwzy.html

Java: // 手写递归
来源：http://www.xuanzx.com/163stahiahj.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163wbtskrqq.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163nrqkhvje.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163rzwuvkqx.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163gyfffahd.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163aapcrddt.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163lurowgyo.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163oiwcyipk.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vpxezjiu.html


<!-- 参考信息 -->