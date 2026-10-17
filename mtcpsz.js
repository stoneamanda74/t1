外链999!wailian999！

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163efolglnz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163nedjcdgp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163wsugpjyy.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163njejuiiw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163qnepderx.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163fqsiahgw.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163rxmccddt.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163sxiuldtj.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163hscebxbq.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163qohbxtym.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163gxykfjvv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163zzachzbr.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ewmsysxi.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163xfwxtpbv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163fdxufvhu.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163rwiivtff.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163rfjyflfo.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163nmrkldbe.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163mwjsxlrj.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163gxmgefmm.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163yikcqgzp.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163cimpuykz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163ehtodzxn.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163fmzeyxct.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163eoueefed.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163chyrnuse.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163keyxkjes.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163rqtffpmh.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163merkfqdc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163qxbpzikt.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163kgelnooy.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163gjxnqgon.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163qcqkbaeg.html

[K07] 进制转换
来源：http://www.xuanzx.com/163lizylaeu.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163soebrctb.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163zyobockg.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163cvxchwux.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xhvorrus.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jflkhpvq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163occojqrj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163zokglskb.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163eajrmvyk.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163qyuirsay.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163jhqtqwyy.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163sqaqlnct.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163wjwosueo.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ukntjwfd.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163lxghncgy.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163cmjnsrtw.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163xvgiqyxz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163ifhxozsb.html

================================================================================
来源：http://www.sxryk.cn/163jfgzyddm.html

L. 网络请求
来源：http://www.aibaodan.cn/163amgmtqzd.html

================================================================================
来源：http://www.aibaodan.cn/163wzdgmtif.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163gdxxlpfo.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163ewcghcok.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163djqoiliy.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163qqsgifdi.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163bklruwky.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163uvlaeatj.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163icoqnotr.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163ixgpkowh.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163mchdvihv.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163rvissqiw.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163azlueeek.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163iihzpklz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163xewauels.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163uktdwdpi.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163bctroeis.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163cieyvder.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163qtaqdaam.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163miobwhev.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163sjamreni.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163qtdteadd.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163udnseigj.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163tbuylflx.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163vzxinmwd.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163mlhdrzsi.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163skqcfepq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163orbjyjka.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163gtyerraa.html

[L04] 设置超时
来源：http://www.sxryk.cn/163jlngzigx.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163zkejstoj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163mbgfmson.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163pjgkktcl.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163yzwgjtyv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163fzdjqqnp.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163vtcszqzi.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163vfgetzol.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163jbbdflup.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163yxbdbqtx.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163fuymbvsj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163rfqoqgaz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163rrxbjdvr.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163sudpqwwo.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163itlfmzqw.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163xgklwxdh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163auiiziti.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163mbaoxfvc.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163mvqfzrks.html

Py:   resp.json()
来源：http://www.sxryk.cn/163zsbhghra.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163jawajijr.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163vqtjibgq.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163zeqynmao.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163ildatmmg.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163dltknngv.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163geaxsvrq.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163wsvehpkh.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163kzhyfalo.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163ogngigix.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163xnvqaabh.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163wjnmgxzm.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163xbvunqpe.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163vylfmngy.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163icqptbfs.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163qofbrirs.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163ghmgwhoa.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163umysnlla.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163bwrijrxc.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163dnkqufzy.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163epzcxvmh.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163isaufire.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163yczujmap.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163kridntpz.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163prfvfjry.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163cqnmvixu.html

================================================================================
来源：http://www.sxryk.cn/163yosqnghe.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163xbvpriuz.html

================================================================================
来源：http://www.sxryk.cn/163idmlfyao.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163khbkgaqk.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163lrodzldm.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163wlvvggnf.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163elqnbayo.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163proicbbe.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163liyjocwe.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163crlvdvoc.html

Ruby: ARGV
来源：http://www.xuanzx.com/163rkzaccak.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163tqdjdwxc.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163mvbnmeae.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163jmrkltwj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163htqlwgpf.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163nhrqpzid.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163tbyouagu.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163hbkvmucz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163epvaopee.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163rrbsbaxk.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163urhempjn.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163nygpqonm.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163pjmtmxby.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ebppisaa.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163eluncvfs.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163xzqzeews.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163sorqfplu.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163rfljdkcm.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163oejaxhad.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163yjcnadnf.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163zkdyfrje.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163kdzrhdik.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163wvscnygx.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163gchuyoaz.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163oazbinua.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163igxvhcpi.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163pnylhlbq.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163tvypxjaq.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163putwwicz.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163diqbyldi.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163evvbowyz.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163vmyyjteo.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163iyhfadag.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163luuarabc.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163nzbkzdto.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163asloqwzk.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163deoogxpx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163xtuidsdg.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163vwgiytpp.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163twslzung.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163kodddpcx.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163kqbpdugi.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163vzrqtmpk.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163lvyyybzq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163rciraych.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163edgkcbwu.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163aximldxq.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163cxmnnzqr.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163rnojevhx.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163ouaekukp.html

JS:   require.main === module
来源：http://www.xuanzx.com/163vlccukqn.html

TS:   require.main === module
来源：http://www.xuanzx.com/163yexirdlr.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163cakskpzn.html

Go:   func main()
来源：http://www.aibaodan.cn/163vwcekxca.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163hflpkooy.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163gigmfhrb.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163rrczytrt.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163ffaabjyv.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163dihmjkrs.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163eqfdaqny.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163eudtyuwl.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163wywmcaax.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163aabuzece.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163jypxfkkb.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163rmepqsml.html

================================================================================
来源：http://www.sxryk.cn/163ukobzpop.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163nkwextet.html

================================================================================
来源：http://www.sxryk.cn/163gphbalrg.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163idrwgknb.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163isxzxwmp.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163quxpcgbc.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163tuocgxnh.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163vhluwsvo.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163paqfolyu.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163viswsiye.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163ksafphtc.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163efcdbbku.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163dxlceyfs.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163yfkjwydq.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163roblvsdn.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163uohkyhdv.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xuqziarz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163xvhecbuu.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163rjzqjrue.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163fzdvnsvz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163jnknbkec.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163gtqxbsgd.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163oarvygib.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163losnkifn.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163bdmjjndf.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163otampqpt.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163lcanjgdp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163rjekpjex.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163sxepxejd.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163juxygxxa.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163bymeafpn.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163emczsfvn.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163cwfuiwvl.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163btpxygoj.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163npxyzrkg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163vukgqutx.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163zejajqkr.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163evwsaedy.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163cefmendd.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163edsjqveo.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163ggxdnavm.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163apjjasph.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163svmaspfo.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163jbkqzyce.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163hpkfrnjf.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163qxogwkgb.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163mmlgrtax.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163qifuqiha.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163hmuoislv.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163pxxgjvgs.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163somndcax.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163vucddfxx.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163tbmlmbwe.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163njhtnrkl.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163tgrftwcg.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163qzotjjeb.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163agpluzbv.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163obhhmmjs.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163wbdbpdfm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163dktshtuf.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163jygfvvjo.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163boombknq.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163kouernpn.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163iqrwalne.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163qskcinea.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163zkdanszs.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163nuscscje.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163fyduwaqo.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163hyisfgya.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163yupmhzwn.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ookfbezy.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163ycxpmpqc.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163tfgivcba.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163fzhpvvlm.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163bnuwgpxv.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163lklkimba.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163wxcsbtij.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163jfbsagku.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163lesksgaa.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163pcveydno.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163asoeyzxa.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163gmzrjthy.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163kcynbmbo.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163zkxgydrf.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163lntkrxyv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163kpmhiwdt.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163sipfreuh.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163zrxicnam.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163gherhbmp.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163jwldkbeh.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163uglthvkh.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163utfttnwu.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163aqhppntd.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163lzlprudf.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163ptwuqlms.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163wpqaucms.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163toqukhbq.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163fiabdwra.html

Java: // 手写递归
来源：http://www.sxryk.cn/163pczzedfk.html


<!-- 参考信息 -->