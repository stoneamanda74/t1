外链999!wailian999！

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163okvranex.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163loctpepy.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ajhriwww.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163yegvahvu.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163cuswzawf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163bbsxojyu.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163cickqnmr.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163yodhpjuu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163iugemjmf.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163mnisqhzz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163smyhfqwx.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163itpbseon.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163dfrtzsqt.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163bbxjyxvi.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163ekpgemkx.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163lulljnnh.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163mbnpnwra.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163kzweafdz.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163saupakcb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163fviakwnu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163bfqshsyr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163qjctcgdi.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163xvwxxxzl.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163fimufmdh.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163qzzscctw.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163ljtpjimj.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163nzqjtypy.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163eitqqtej.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163itkhlpas.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163nryalumk.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163zszasfqy.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ynaqiyij.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163gfrorhsp.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163rvsfwavl.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163usiwbueq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163tyczelta.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163bjclrtlm.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163qcqahyrz.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163oxulqdln.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163bpeycctg.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163fhxhanua.html

[K07] 进制转换
来源：http://www.xuanzx.com/163myaqzeop.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163wnxpbkpt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163hqifsvwb.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163dqaarkce.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163okfahpxs.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163pbkoiqnm.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163qkhqebhm.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163mupdayaz.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163kfsbmkcx.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163oyeidtlg.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163eyzdqlma.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163fjadnugr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163cvoslpfa.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163yplywjhz.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163hvdimooh.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163qsafpyyq.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163tozauvky.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ldkxcxav.html

================================================================================
来源：http://www.aibaodan.cn/163ueinkprh.html

L. 网络请求
来源：http://www.xuanzx.com/163ydidwtrl.html

================================================================================
来源：http://www.sxryk.cn/163vhkumvov.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163qlggwoqp.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163hsgovbnl.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163gsqrzqvl.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163vvfuyfzp.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163pwgzxidg.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163bawxhuei.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163typlgwqu.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163juisryzj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ovfwwznb.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163nxmsiyxw.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163jrlohcas.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163fdgzoyun.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163fidkolnm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163sxrvmges.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163shwrrast.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163qypigmyh.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ejwfdhjf.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163oanyvszr.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163hucailoe.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163sbebzvoe.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163uszvioxa.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163hugiffrk.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163kbwvcazv.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163hhyenyap.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163fgpxinqm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163bknhuuwk.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163hbqhecjc.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163mkqejkzh.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163djdnlytx.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163ajnhzlzf.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ckhkieui.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163vbonxcxg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163oldlqcnc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163ndbwedec.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163wyjqoepp.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163cdcaneal.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163jehulfim.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163zsxhkgly.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ojkcmtzc.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ryczigke.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163iyzdvttn.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163xurmalae.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163azuxoudb.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163vpktyrsn.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163fuvygbmr.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163tnxkxoka.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163vxkrultu.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163kgeiooga.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163nhnvnktr.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163yfrsmurv.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163cvzmbjfh.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163oqqrhxbz.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163rzczhlba.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163xsgtsayo.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163vjbtewej.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163vtnysxcr.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163ucumwdka.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163nkbjaelp.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163shyccifx.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163ovdyeaig.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163juxmmjhc.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163bmdaudea.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163kcrmzxdj.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163pjhmaljk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163qkwzrivg.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163qxzjqopg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163gexhbmtn.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163lggnvmby.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163qjbrmbnc.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163soskyjke.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163dfxvmzzz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163eryulhdw.html

================================================================================
来源：http://www.aibaodan.cn/163cplaigrq.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163lzzyjhnu.html

================================================================================
来源：http://www.xuanzx.com/163btjrvtdd.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163lmxudwff.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163xsoftoci.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163xkcezcir.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163qirsvrvv.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163kjdfzerq.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163hirenshu.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ntqgkuli.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163zoqqpqpr.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163cvmxmyto.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163qvmshokn.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163xquwoihv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163ibvybuai.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163zqehmmzk.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163wsiijxby.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163hwbebour.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163wivgcckd.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163chbaplti.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163xezmgbbx.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163hbslckjy.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163amfhnsht.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163hereheyx.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163xchjchkj.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163tvuntmbp.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163diyoplkn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163gxqcmtpk.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163exfrewhk.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ubkfzqwn.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163wjbtajsm.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163cnpfhjkj.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163qgyqqzec.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163qitomatl.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163lthapqht.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163zirgspxh.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163qddldzrn.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163lakimpuc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163mgvtcsde.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163yslcenzg.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163zajapthk.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163zfpfmbza.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163udrobjgw.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163fvdhspyi.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163nshgprvm.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163dlczlyvx.html

Ruby: exit 1
来源：http://www.xuanzx.com/163vxngdonr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163mvlymbkc.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163fxvnaowp.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163purngprq.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163aunpmflo.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163jhjuiziw.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163xlfxcpla.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163xsflptkm.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163mvdogagv.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163rswqjnfr.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163czzxbrod.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163vhmxkbyo.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163ljvgqobe.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163ovembjhb.html

JS:   require.main === module
来源：http://www.sxryk.cn/163gtxzzflv.html

TS:   require.main === module
来源：http://www.sxryk.cn/163lwppppbb.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163edrejvkj.html

Go:   func main()
来源：http://www.aibaodan.cn/163lovsxpiz.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163apdfpjsv.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163hlxbjtdr.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163vekcryef.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163uiyzlpge.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163pjlfspom.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163hdjblmbh.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163orjdnrub.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163kddsgksx.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163gvhjrwuc.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163aobmpzxi.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163vkbvxymh.html

================================================================================
来源：http://www.aibaodan.cn/163zhiwdxhn.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163gcbsoqmq.html

================================================================================
来源：http://www.xuanzx.com/163wcaxixww.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163ncldnvni.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163xmxxzeoy.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163kzxiiucc.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163hmmryxiq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163oijahdew.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163kbkuqncd.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163rhagcrqd.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163drhjosik.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163phulxhlh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163qwjamwrt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163rwyzpqka.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163umukglah.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163gizieqsz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163bpqqfrzq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163efpaubek.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163noxcoint.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163bowbdfxw.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163rzupbpty.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ymkyvmss.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163egsehawd.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163eihoklyt.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163efolaakl.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163mbxcotkl.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163hnumhpmd.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163kzdulphk.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163sglqpola.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163fkyekvfw.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163jjhiwedh.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ydnfijes.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163odlrnnsi.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163vukvpciz.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163dyfgrwxe.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163lxtdptfo.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163xuzjwxgo.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ndpihxdi.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163gvcemczq.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163xbjefliw.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163vpoflmbo.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163xkfammoi.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163grcgqutl.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163soeimvbj.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163mqyvjftn.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163ychzirjn.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163sukmzfsz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163zhmkegwa.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163ygisozar.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163efcnotdd.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163ofocegeg.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163hyogbdcz.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163eiwkxptd.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163supngsrk.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ctowbhpu.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163uwdgbgtj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ddcfunul.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163synngxqw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163gkfayupx.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163bhtxhbwu.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163jbakpghp.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163htjidouq.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163hkxmhrju.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163tmirevhc.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163etpeautd.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163yhobhxdf.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163jyqjxkam.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163zuqenlse.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163fchmgxxn.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rrcrzqyz.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163uvpucead.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163tiljjjjy.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163vfremihm.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163ibazvoab.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163pmgnefji.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163ckmopcej.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163gpwwslwi.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163whpwfwvc.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163akzrwjsk.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163mmpqxfhs.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163nsulcnpi.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163lujuimhh.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163iwbbjhri.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163vkjijueg.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163qjgjuzfh.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163sgdscmcm.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163xxxnmfsg.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163ovcxarbk.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163posfdrqn.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163euvhxkwh.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163gejkjifn.html


<!-- 参考信息 -->