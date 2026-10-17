外链999!wailian999！

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163xtiskzlb.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163mrldecnt.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163bqyixzto.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163zsaryhkm.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163qrcshocp.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163cutttrwr.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163matzngve.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163sdzfdaje.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163iegtxusf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163yzehihii.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ybpdmklo.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163biptnyqn.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163wkjiqnkl.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163rmoyjryf.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163vtjzopqg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163rwxmmiiw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163cgjighvx.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163wynubdas.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163siohvmnc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163vilkrqux.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163kuewdbaf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163uecrzuib.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163vqhgqsnx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163fbdjpaaf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163axlwoceq.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163mkyssrfe.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163wckvjmsb.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163yxvcumnj.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163povvhnjy.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163keffrufg.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163dpyeyqug.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163wqlvvgsn.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163rmeztdvq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163zqjdrdyq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163hbsjcddo.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163ejrxjrsr.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163qmkgdamq.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163uzwokobx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163xrlillqs.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163gqhtbmbj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163jyecooar.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163cinpimfd.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163wddakvre.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163zwchrttt.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163ilynggew.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163rhbsiqpc.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163ibeiyjxd.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163allbbqod.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163agwbvbbb.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163adbgklff.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163rdprpbgq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163zvijwzeb.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163lfsmrqkj.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163mclwubji.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163dykglpzq.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163dbqvxfcr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163kipxblci.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163tpjupwsm.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163pkdsvczf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163yczvzjki.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163ozkvflzt.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163wptzjwlv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ridthhwj.html

================================================================================
来源：http://www.xuanzx.com/163sojtteme.html

L. 网络请求
来源：http://www.xuanzx.com/163tgxigxzi.html

================================================================================
来源：http://www.sxryk.cn/163goyhxhza.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163xbtsmxjg.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163yxwelsnf.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ilhokujm.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163mijkcrjt.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163aivdguxl.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163ngjymuli.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163nqnmygns.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163adjjeeyx.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163mmvwlukw.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163xsmrmaba.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163hvnrgtey.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163nzxfrzye.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163cydexkei.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163gbhfxaee.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163ubepkwwi.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ewvrkgyp.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ykgoyqko.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ttkjzrab.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163uhckbfbp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163asgjfdbc.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163hohfqmgk.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163hzntklxo.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163kwtmiwif.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163elkildjy.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163ctqzxgnz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163naxxgwtx.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163vgljsgjb.html

[L04] 设置超时
来源：http://www.sxryk.cn/163cayeendl.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163edximqtf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163kdepaohc.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163vgihqasc.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163jguhbhnm.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ldtaqjwt.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163gibvglug.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163groecyoc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163anlwucnm.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163rrqsdqze.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163fgehumbd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163bvphwzxw.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xxikqxwx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163zbbxsxyn.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163xytalocp.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163iittkgvs.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163qkkhiujo.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163tpowmpvm.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163dcfxdkjq.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163qrilnlfg.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163wywzqggt.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163eewbktwd.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163epebohie.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163tcveyoid.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163zlenlamf.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163jxnuukdk.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163etkjdxba.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163sziajsej.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163bttpsmfu.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163sanajdgn.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163hzxlnhzn.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163gkfjdgth.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163gfgzdgsc.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163lkpfzaut.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163hfydzcrs.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163lolwnaav.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163caohkiqg.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163uhnxytyy.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163atactgjf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163idcsvzic.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163nvohdtdf.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163vqpjkcmc.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163jcmeydfd.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163lcrppnva.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163pvvsroxm.html

================================================================================
来源：http://www.sxryk.cn/163imewnxbe.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163sfqzpxtu.html

================================================================================
来源：http://www.xuanzx.com/163qrywlylt.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163hiuaqqej.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163yuyxakwt.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163fquhzwfv.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163vhirxcgh.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163kpuvcter.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163lvkqkoha.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163gbzkecgc.html

Ruby: ARGV
来源：http://www.sxryk.cn/163hzwsilib.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163plekrugl.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163rlilyhkt.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163xhdfphfg.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163surrmcho.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163renedxjp.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163ditqqjke.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163dddxfvrn.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163aabkitwy.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163ehantnmq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163sjolxsak.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163zkladncr.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163yxhnubaq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163vreqsmqm.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163jhswmlwx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163lvbonnbz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163jmredhjx.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163holimdgx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163ngrehgie.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163xccjtjqm.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163dlzrrvmq.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163leljwtrs.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163hsminrel.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163ztnieicp.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163dmwclfls.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163pcoaugib.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163nxaccclh.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163yttshzbg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163znhidijj.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163swbstieq.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163dwiduuum.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163bxqphkuu.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163vijulyry.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163lvkhyrjm.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163dsnjdwhe.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163aewndqjp.html

Ruby: exit 1
来源：http://www.xuanzx.com/163adigsryh.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163zpcssewo.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163jozbpter.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163wwaiwxvj.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163vvxeghvt.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163qtprgtbv.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163vnyvgkfe.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163ppcqwlvn.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163lcutvgjc.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163taohvxql.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163zynusvuv.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163pkuzegip.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163dclyyqtu.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163dldwinnw.html

JS:   require.main === module
来源：http://www.xuanzx.com/163mzjkhjis.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163vrnwxitu.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163xtskzent.html

Go:   func main()
来源：http://www.aibaodan.cn/163hlmfmdkz.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163uihbjupt.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163drodjcvi.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163xkrvrppx.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163xmbbbcyn.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163rlygflti.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163vrbqechl.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163wwbisorm.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163rcmjjygh.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163lmoewxnw.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163nvicbjlc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163nseltgjk.html

================================================================================
来源：http://www.sxryk.cn/163trtfhcdo.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163saksfwke.html

================================================================================
来源：http://www.xuanzx.com/163gpfbgtnt.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163soymaiji.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163kibuifxy.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163xwxcohxb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163zjuleywh.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163vfrqldxu.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163zgsnasli.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163vcmuyljj.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163cqdxihoc.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163lexctdps.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163pskywyhz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163nlpyexnt.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163frjmxkkk.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163jwzuzhan.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163tqegqkai.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163tmnkrmjg.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163tqyqfbru.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163bojnshuz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163yrwbbqtv.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163cpnysgmy.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163bgllyubx.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163vxbionum.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163jkhnezyp.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163mjsexjyb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163yfxgxcfa.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163sppczwyt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163cswtihhv.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163ujavozhb.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163lryburrf.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163caihyowv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163szjlpeyv.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163kpijbwwv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163huuggadq.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163rkqcvafc.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163apusnnkq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163igphivai.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163olauxgby.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163ccmwfkph.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163hvddmodg.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163mtrdjrzv.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163wptowpcw.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163jsvmmsjt.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163myxpsfvz.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163lalklaeq.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163mbargevo.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163tcvlrlqw.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163ugmyiwpi.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163bcisaxus.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163wxvhyjhm.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163btcrjodj.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163btuczwgm.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163pqhrxfqr.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163tqzyrfje.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163nbuiodbt.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163cqhtefww.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163kzqpltfi.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163waliyexm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163pwdwjbms.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163fktnyesd.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163oxbsnvxc.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163mxyyakvw.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163irhskymk.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163gkmyopvf.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163rotglegg.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163ygsbvryf.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163pkmadbsj.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163cpiiuffq.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163beauxzki.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163watzlaew.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163aydtfshe.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163fizdmgys.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163khrrhbin.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163vpnflvyj.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163xpttdzed.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163hwyakgxm.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ujttnjme.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163nvrfxbba.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163bthwutse.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163eaeccrvf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163pnpsivcv.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163rmbpuxnb.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163achngbxl.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163uhqbwtoe.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163yovfynlc.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163kppuktvc.html


<!-- 参考信息 -->