外链999!wailian999！

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163cxcezmdr.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163bdxypgpu.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163faxdlotg.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163qcjfbvxx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163gdjvxrur.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163fiwjhzds.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163fofsxotj.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163wqymfwcd.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163sxuyjglg.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163yutijays.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163gyusptxg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163npkpjhyw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163ldxovppv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163rtcttczy.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163kfezfcui.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163lhfoiyyw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163cnpjjiri.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163rhrdigyj.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163uysaidlm.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163cweirrvn.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163emwnseye.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163wxjwthjw.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163epswiecs.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163viqohudu.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163dniftqzk.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163dawyliam.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163azmnphfq.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163yoavcjkp.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163wjmbtqhd.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163slvctuft.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163tetqkqko.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163flkvlmbr.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163wwdjgqng.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163gbrdknxx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163vrikbetm.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163pwjcjuvt.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163gqpfjgpy.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163pznbdpfi.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163yukbnvxm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163nzcahgbj.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163imlaxfqr.html

[K07] 进制转换
来源：http://www.xuanzx.com/163zwljicxc.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163zypxlbgn.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163normktub.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163stoyaied.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163xklcmubq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163xezblynu.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163pkktjrhn.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163xmswuyou.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163lqrhsypx.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163xywiyfzb.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163dtwdhrnp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163jyzsgwru.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163luchfzws.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163bffqlwhm.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163pzatxvju.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163hrrvnfbj.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163nigcluvi.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163mnytfuez.html

================================================================================
来源：http://www.sxryk.cn/163cpmldupq.html

L. 网络请求
来源：http://www.sxryk.cn/163ljgbkobg.html

================================================================================
来源：http://www.sxryk.cn/163ddlrslaq.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163xuyotvlz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163bybuxlpr.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163frjqqmop.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163vtljkfik.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163gqctttkn.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163imbxzfro.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163oguydacm.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163eaejlkza.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ykrujlwx.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163mxjwfakw.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163mdprzdrr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163mjyelqav.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163yvmohedq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163vtswykng.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163loecebzb.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163fjpvftns.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163szpwvqrv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ahkedngm.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163xshgktxx.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163wijwskhd.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163hxjyyvvo.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163izvqqoun.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163dgwczzmt.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163rbvxcjlg.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163ropqpxnh.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163lrcmwywq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163bjqfbeun.html

[L04] 设置超时
来源：http://www.xuanzx.com/163ndmanmpg.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163sibplxfj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163fhmoavlj.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163nkivisot.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163fpbruzps.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163qwllkovq.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163kjvadlvf.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163vbbyhjak.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163mhejgyjg.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163vuvwuzbk.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163tuqdiskb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163yqocvomn.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xjouuupf.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163fmlqnrnq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163ijtimowp.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163eptjhbwc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163vwwgkika.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163iztdqwhg.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163zotghzmg.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163pzgccepw.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163zbpzmykk.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163iabbwjru.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163hnxijeus.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163twwfahjm.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163pdxunrse.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163kaqkrkqp.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163jdzkrwqi.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163jtccegsp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163wlfejvhw.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163hzdhrpwp.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163hqkgctdl.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163elqjmwno.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163ttgrqzls.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163oupxavam.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163tcxenzba.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163pclydilm.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163wivhopbc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163jdhsnzmg.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163xjkriwkn.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163aqksrwxt.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163igknafzp.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163cbejhuep.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163nlippejn.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163rhcwcrae.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163lohocrqx.html

================================================================================
来源：http://www.aibaodan.cn/163azzkhset.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163dztmvwmh.html

================================================================================
来源：http://www.sxryk.cn/163akiddsuz.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163thxstjum.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163uemlrctg.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163sevsxtii.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163tevmthbl.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163zshqgiea.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163uslflpim.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163xesacqcv.html

Ruby: ARGV
来源：http://www.sxryk.cn/163bxtrkcau.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163oitjkwvu.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163huieceyp.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163lstqjwfg.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163insanekd.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163sliuxuxm.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163peecyvxa.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163stqmlvxq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163czmrvqmm.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163whvyksvv.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ajgqsqgk.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163tqnygimc.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163blppdaio.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ryvdkesr.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163tvrdrmxx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163uupfypql.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163wduftvlh.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163slwkkftb.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163ijrhtorj.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163trjhfiji.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163xiozwrhb.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163desimysl.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ifgdvoco.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163tqycphsg.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163rbxztske.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163scafcdqz.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163ofiywzbk.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163qaekfclr.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163akpxmgmo.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163epupxeev.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163csdhibbs.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163dznqzwos.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163fcymregt.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163exipbilw.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163jjqxmswl.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163xdcnyjtw.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163gjymjvoq.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163pidzfycr.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163zpqechfs.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163xhhmhxil.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163zkjvrpbe.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163xvqsqmvr.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163ehpzwkqh.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163bnhxtevk.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163xusdhbds.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163ujpsnnmk.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163wqdrdvlt.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163bymjupiz.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163lkyzkjvg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163dlgjvvca.html

JS:   require.main === module
来源：http://www.sxryk.cn/163wckvzwim.html

TS:   require.main === module
来源：http://www.xuanzx.com/163omphqutb.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163jpiuhmuj.html

Go:   func main()
来源：http://www.aibaodan.cn/163silbyiec.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163jtzmttug.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163tsjxpqfz.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163supnzheu.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163typvidgq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163kwikqhdl.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163bvmigpgw.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163drxoweib.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163eicwhjrg.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163ulmusaqe.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163gtvrvcjq.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163eacjhuts.html

================================================================================
来源：http://www.aibaodan.cn/163ctthqvjp.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163tonjptee.html

================================================================================
来源：http://www.xuanzx.com/163dlsewpfo.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163ouazronm.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163vhprqabf.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163qsslvbht.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163enfcnycl.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163lgmwtuyc.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163htltzvty.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163gofrxsvm.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163zkcdrzfi.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163qghiltoo.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163qkakbwdi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163gnkymhwx.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163qchqrszb.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163yuornjss.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163oknepkpc.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163pvqkiarj.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163hjgbsiks.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163wtxcvvip.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163edmfvynq.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163gwboclpn.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163aziusejl.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163aqlcbjya.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163wkagkifu.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163wnxzccue.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163byjmhyoe.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163ggujvkfc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163nkkgugag.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163gvxwipsp.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163zrfohjii.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163vxcthvcx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163woyzvzmp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163cdbqfxef.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163wsozvoxy.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163bdgthbyx.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163sgmmlkam.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163uyjeosjs.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163eonoryne.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163tuhailam.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163digaigwt.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163fkmtzoll.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163wkazbqbz.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163jdypngsg.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163xnenftof.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163bdjzzqaf.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163eadlzwnc.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163myqqzjuz.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163qvufkkho.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163nyxcpbte.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163acfunpsf.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163mwmyoljq.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163fradselr.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163mrjcznth.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ukrdofaq.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163opdgsiyz.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163rswbhxvd.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163hqchsrul.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163keqiuxmf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163kdkalnqn.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163flxulyce.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163dxvubhcm.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163zpvdueny.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163ocflfckd.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163ieuzmdid.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163dugrxrci.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163jrckkyws.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163rfcvajxe.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163oetacdku.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163hqffsolr.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163tpbymboe.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163qddmlopa.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163wuunafsj.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163svmwceti.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163simbwjqk.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163uxpjgsox.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163hljwoxzh.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163ghugwiqw.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ynfgajmg.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163speqagut.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163kkvxflhq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163qnbkmwsp.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163lkkdennp.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163udkxlraa.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163aznyrsqj.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163brkfxbkx.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163ayjsfijw.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163fazqvbfq.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163rqhsdzgf.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163wssxocje.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163kkquktcy.html


<!-- 参考信息 -->