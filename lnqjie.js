外链999!wailian999！

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163fbfqqjbt.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163vqptpysw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163xjkhpxua.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163wrsyybmf.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ituaxiew.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163oirirrkt.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163gamjsstr.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163lpztfbav.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163hfecjhaj.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ipoquyzm.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163imayuvjr.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163vmelmxor.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163qqbzhdyq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163pqnreawr.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163olfgwezj.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163kvttatad.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163xmqkymxf.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163hvzhhpef.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163vmqcwjvq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163tkmcuuwz.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163fqkfiwwv.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163kevjuiyd.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163dezoqeqz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163uscxsbpr.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163qkwdmrfw.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163qsqpumsz.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163evwycmrz.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163zhxrzhyq.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163savjaevq.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163crgtwrpd.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163rtymyaqa.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163mktmupff.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163nkfxyqmr.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163piowqfes.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163mzigedgy.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163dctgveqa.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163cebgrsch.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163ayqpgzyw.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163gupnezps.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163jluqgznq.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163dvyttspv.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163nompxbjq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163mtszbshs.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163pmpauppz.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163fqutjoif.html

[K07] 进制转换
来源：http://www.sxryk.cn/163jlcefhcw.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163eeoamyqe.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163wueqtjlq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163cchquafg.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163mxxhohhg.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163zhwmtwjh.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163vcydayqp.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163mdqfogne.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163pcoeyhkv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163oolegxao.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163bqksqrfq.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163ijrmwfss.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163wcxtnyer.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163crsafwks.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163mdvgfbjr.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163wvwqedhg.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163sugqxczq.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163lrmhlzch.html

================================================================================
来源：http://www.sxryk.cn/163nklhflho.html

L. 网络请求
来源：http://www.xuanzx.com/163rvmucatp.html

================================================================================
来源：http://www.sxryk.cn/163ekojmpxf.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163dizvnqef.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163alakssax.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163ftrhuvug.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163tkzwltly.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163ipompcrp.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163ephfnlpo.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ichzrbtp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163efpnegfg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163yyzouoqu.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163mzixtmrf.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163sjuogduu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163qwhnivyd.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163yazlzfek.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163hgkoayyk.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163pzlpwyos.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163bxahexuk.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163fdnojbie.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163fmjjdlfr.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163mmxzysjj.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163btvtrhue.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163mydxxkjk.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163kilfhvwu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163lbqawdyu.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163tbnxztho.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163vgykrdme.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163crqxvqdl.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163ztucjlhy.html

[L04] 设置超时
来源：http://www.xuanzx.com/163yqasxvip.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163fmztohwh.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163dpivfeic.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163mflbwayj.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ldukzzin.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163nhgfiitl.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163rnizhvmv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163fboirkvg.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163fhhuaqkj.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163pgxblwjl.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163lqloaqdr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163jjuiures.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163nsypfpuj.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ssegrfjl.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163tlxxtthh.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163idkhjoiq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163kcfqlokh.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163wcjnzfnw.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163tgqvmjxw.html

Py:   resp.json()
来源：http://www.sxryk.cn/163iqegmaje.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163giffrslw.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163njvtitjn.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163ajrltuml.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163riwoguzm.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163eqelvxyv.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163rxumwelw.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163wdsjqnkj.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163lhiihcnv.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163oblhnypg.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163suopyqoi.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163fvvtzgxs.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163mlzblwaf.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163hvypvviz.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163aeqbozfk.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163tvmdoncc.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163kpcdoyux.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163skxgjbyx.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163fudanpkp.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163rjtlalyq.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163pexobxqv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163cstjcyhy.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163dzhxfpkj.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ucriqgrr.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163kmaugrif.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163qotudehl.html

================================================================================
来源：http://www.aibaodan.cn/163rznvczzv.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163ueouzsim.html

================================================================================
来源：http://www.sxryk.cn/163tfgjzsgu.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163gpkqctda.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163vpkgetyk.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163jmfwirot.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163amcwtkwj.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163pxfmdrxw.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163dzhrkopv.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163gozsqjqe.html

Ruby: ARGV
来源：http://www.xuanzx.com/163uuemykeq.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163sbeycapv.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163rbvenwmd.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163mijrmufd.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163bdkxbykk.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163wpwnfquo.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163cejfenvr.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163hycufovz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163hqnyrfki.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ffkoppys.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163kcytjncr.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163ftbhound.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163lvkwecgd.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163xnocwfeo.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163sbugfzgo.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163zyglsmka.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163wrrgyrob.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163dqvnadgd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163kwjtbxqc.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163dhneuiec.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163nkvoggtz.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163mrsbuihk.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163mytpmdnx.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163vajdasqt.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163yklfujqu.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163ovzgrtyr.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163jclxtrfq.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163wjfrflxp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163caltodic.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163fucqjpic.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163koszylju.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163vagqkarv.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163ovkenxbe.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163mqkrptuw.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163vefjlmzj.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163qcbfaxyo.html

Ruby: exit 1
来源：http://www.xuanzx.com/163vschihvr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163fettenlm.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163ixtibgcv.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163uugnocyx.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163zxymcjcu.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163georhosv.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163wcrhzsxt.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163kzpuooiu.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163kcqtptbj.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ruicnxqn.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163dfweqdev.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163spdnogkl.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163oafwsjxg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163lscxwpnd.html

JS:   require.main === module
来源：http://www.sxryk.cn/163qiezfgxm.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163qvsffziw.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163jlbutqkz.html

Go:   func main()
来源：http://www.sxryk.cn/163nmiiappu.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163reitjnzi.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163rkprddnt.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163kvfcyfbd.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163zjuwsrmk.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163knfbihdk.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163gbbyxjsg.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163jzopvegv.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163rdcvaoma.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163kgcqzauf.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163stcomfnc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163xpmjhjak.html

================================================================================
来源：http://www.sxryk.cn/163okgeolsf.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163tgwxlibd.html

================================================================================
来源：http://www.aibaodan.cn/163fnzbpymw.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163hfirkudn.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163ptpevmlq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163uyvoltkb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163twzdfhkk.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163mgjmsnab.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163vibwkhpu.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163esmkwayd.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163lwnzcxmc.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163vxitfkbr.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163fxpcdevu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163iuvzuwph.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163xnpsiixe.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163rguhgkfx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163pttfeqfe.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163llsdzyqp.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163auohvxzm.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163hoktjhoe.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163jqkutsze.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163xcnejvnj.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163viaqwkzg.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163isjobuyd.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163yvgdgbsm.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163vxlgeafo.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163zaktkprx.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163xcvrtbeb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163ciauvnhz.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163avhbcmty.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163hihalkwr.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163zkpaodkc.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163mrtnyjqy.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163vhhwkfju.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163lqfbxuio.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163ifazcqvc.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163txrakbtj.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163miuwciho.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163asivegkw.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163vbicvfcz.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163mubjnxho.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163pzbebvct.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163vwxnlntm.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163epibackm.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163bkdyckpo.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163rdkgdkjw.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163wntectep.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163darxttaw.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163mchuzbho.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163thfywmbj.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163qkeshpta.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163atbbaxxn.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163lzhezajl.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163fotdfrij.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163ntytvqld.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163ysqxetjy.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163wpqbbseu.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163jkoqlrxu.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163tveszzvj.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163vjgaisuw.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163esxxacbg.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163axtckgvh.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163vuptvuiq.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163exlrjckb.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163gumbksaw.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163zkmkvitf.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163ysglxtmq.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163gtzbgoye.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163kxnxtdkb.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163wazkahpi.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163uijgfaga.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163mgrbfawn.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163tutntlpd.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163kjivaeph.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163yzhdetja.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163cbryqlzt.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163wwhkuxid.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163tfvkaczq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163lwwvavzq.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163mkmavmvk.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163lbrumunm.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163oupitvft.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163wdmwgvsz.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163mqefrgep.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163rgzjqjna.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163gusbimep.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163ewjbmunm.html


<!-- 参考信息 -->