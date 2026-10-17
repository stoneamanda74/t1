外链999!wailian999！

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163byrjbieq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163kubcvtuq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163vkmofoed.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163btexsmeg.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163cwqqnzlf.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163drzwpkuw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163temxzihp.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163mwidgzko.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163wbovhwnp.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163xmiussos.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163yravgdkt.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163hykaxizu.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163zydgrtqs.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163yqmgpqxg.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163lwmxqcbf.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163jvtqxjqg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163lxswcbjz.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163skmeqxcm.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163mdhasggb.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163jhuhjpwq.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163tgcoitks.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163zodjmvmo.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163fnzxhsya.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163kwgwdvfx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163rfxossro.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163klfalnmd.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163kgxjfqvr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163xrwgkzaq.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163nrizoatz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163ysnkdptf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163idiiwqne.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163jnujdjid.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ouarcdbz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163dmdvgyxp.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163dkccykra.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163fvcldkfm.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163qmyvbziy.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163gpfqqdju.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163tkxzmypo.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163yjqeyqwm.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163kzuazwbz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163dgnmpgqb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ppobafmo.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163nlvgzakd.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163phywyhik.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163uvwkijtz.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163xyvvlgdy.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163ssyiumbt.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163thzpchok.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163shlpcxyg.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163yszdcxaj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163rxhuwofc.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163cmkwkkzr.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163treypapz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163tjlpsuxi.html

================================================================================
来源：http://www.xuanzx.com/163femqpata.html

L. 网络请求
来源：http://www.aibaodan.cn/163lwbdrdyc.html

================================================================================
来源：http://www.aibaodan.cn/163ccibhvux.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163nvpmbbvt.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163rxlzastm.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163jqzsvbiw.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163zrkouugv.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163acyporqb.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163qpbbbaye.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163pytfaqpr.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163pycpipnt.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163hoyjrngs.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163sdnlgfxc.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163ucdlrbvj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163dtargslu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163kpjcgnik.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ayraamvl.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163qhalespw.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ycczeepv.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163zwucmcos.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163djqvsmnt.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163lppdhubg.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163oxkfzyec.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163pxpiyfjr.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ezmokbhh.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163patwhznp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163infdbcnn.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163mngyvyaz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163dhacvqfd.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163srbdpjgi.html

[L04] 设置超时
来源：http://www.sxryk.cn/163lovvdwye.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163jfvmejzl.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163yqsoymit.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163amxfesak.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163euinhruq.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163sfmihall.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163gzgsrgmv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ihidaquq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163ylabkvzm.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163ihlvtvsz.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163llrmrvwc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163vmdvhybb.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163jwfrmbum.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163rwzvzmyh.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163xfdrncue.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163pgdoilus.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163sohgqyon.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163evekpsmz.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163qxtjdjot.html

Py:   resp.json()
来源：http://www.xuanzx.com/163zqzaixzz.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163chtmvcmh.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163exulznjf.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163amjrhwro.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163ugxncnnq.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163dqyvlrfw.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163oqyksbni.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163jqapzhnb.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163krysbiuy.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163bxrhqvgs.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163fugcxyan.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163pbhvedwj.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163eoyecqth.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163nudpsakm.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163uipqezzg.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163tppfilcu.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163gargeysu.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163shxvzpmy.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163zjshaiyj.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163enikqdfa.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ftaztvsq.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ivaheldq.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163unkzyyfv.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163myswzxeb.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163ngblqkip.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163msbtemfm.html

================================================================================
来源：http://www.xuanzx.com/163ciascemt.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ydbzejkh.html

================================================================================
来源：http://www.xuanzx.com/163zjofsdim.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163vfczgjsm.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163useuaghi.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163mvggbyqk.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163lhficsrm.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ynuipasn.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163owttlgxb.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163qhqpoaza.html

Ruby: ARGV
来源：http://www.xuanzx.com/163rggjrraq.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163ntvkneox.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163lihieszi.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163yygrzwtw.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163svvbrufw.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163aszqcrbs.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163yrxysvsh.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163jaglqluu.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163mirxkecg.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163bgsbguhj.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163iusvuqgi.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163hbkruuef.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163njuslcwx.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163omyjqbbv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ykeytodt.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163vhkfigiv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163glbpkqmx.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163rlesxfrw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163ehnptira.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163wtugsxbt.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163ascaaiut.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163igexuoyy.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163pzjwyrmx.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163knwreeky.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163drkowsku.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163dvizzvnr.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163ktwsuiao.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163oiuocikm.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163osqvbble.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163wjnuqzut.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163jonyuxzx.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163gihlzzuy.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163xiwuzltr.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163lovfosfz.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163axsvwhme.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163wnzzpagq.html

Ruby: exit 1
来源：http://www.xuanzx.com/163kcyflubu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163lwuihhpr.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163kmwsurjw.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163iovdknpt.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163pdrsicpq.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163zjmjhvvf.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163ctaeajqv.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163bfflpdak.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163mkeysmdy.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163zwqzfjpy.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163qbexlarb.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163zdwcavnf.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163yyripewg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163gboixnxw.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163bbuoatfm.html

TS:   require.main === module
来源：http://www.sxryk.cn/163toxeonqg.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163uidqqyox.html

Go:   func main()
来源：http://www.sxryk.cn/163lxprcbsq.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163ecjvajhk.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163vdtbavwd.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163ooxocvah.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163rchpotnb.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163csrvabmb.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163bhfmwqkv.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163hgpgtbne.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163trgpgvuh.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163swvgyjvy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163eobjpamy.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163ukbfpfns.html

================================================================================
来源：http://www.aibaodan.cn/163nlquknol.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163syuhzxsd.html

================================================================================
来源：http://www.aibaodan.cn/163nbariwkj.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163jrquwzxm.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163kpetneyd.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ujwrwlsy.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163aalpyazz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ssoiiyzy.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163pnburrij.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163yoxewqrv.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163qqarnefj.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163xstilnhx.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163ytndweql.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163jmqoljpr.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163xtgkoxmx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163vdgnzzry.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163qpjmsieb.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163amybzovd.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163kpjcggur.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163gxjdwvnr.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163ysdgvyzo.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163jyfowadr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163lelyfrmg.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163izmafaes.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163vjyefxam.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163hjboigzt.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163agijogln.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163insaxgjg.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163wgingyjc.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163ntvrsdcq.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163elybwrvp.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163vhfbocla.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163xdgglvmh.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163dbzlqsyt.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163nfhqrudw.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163uhcnxekh.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163uxyqzkfd.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163kcniamws.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163sujvikdr.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163rigmoave.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163bpgaqvjo.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163kimkuzhw.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163rdiojbje.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163owsgdnpn.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163msbpetvm.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163bfoysqrb.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163vdgvexdy.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163mhwrejfn.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163liyaojrx.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163bjevntxv.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163wvwvopxn.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jkfsdowj.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163whubvvcq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163kcfoynsl.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163jnlcnvnx.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163mlqjngoh.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163onksysiy.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163vyyaalea.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163eoflwjwh.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163fuzcpbja.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163ogshdmto.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163mxyqodsx.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163xispoyhn.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163jmrpzfzv.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163fjvnrhic.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163zuqetejs.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163ofhmrulk.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163drsgngyl.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163rpfgvpxf.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163hnuzlegw.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163njtjbiza.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163slsrdvee.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163natjziir.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163vsbrchgr.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163qvczxmmb.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163igqvvudu.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163acuammvu.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ebyetadq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163osvlfzbd.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163bdfpzyva.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163pylcqgmp.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163oqkfvjhg.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163xcemdiil.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163sttdovov.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163ysvtmdam.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163ijbkbhnk.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163fkugyejt.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163rbjvhvlk.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163zrihhzue.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163yltfuzyo.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163kbsbnhgo.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163asrilngi.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163llrpbmsr.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163mixottqv.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163nrbghmtw.html


<!-- 参考信息 -->