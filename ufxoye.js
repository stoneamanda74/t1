外链999!wailian999！

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163edukqzmx.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163puavvqia.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163yztfeypy.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163ftxqnafa.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163eycrhesa.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163ocatsvzk.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ugdfhths.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163zwutjcwv.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ndctjnlj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163eibisara.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163xfhxlzhk.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163mggrjydh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163anoelaxt.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163bwmxjpku.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163gioywktb.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163antcktrs.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163wkjzvmxh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163shksmzte.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163nmotoqvu.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163sylkknzy.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163maerjzyy.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163wvehcvaz.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163jxknwcis.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163mnewwxor.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163eiuxarck.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163dmmarbbr.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163pibenfzq.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163onpsxrfc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163qvpielah.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163dwtooyci.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163yubnvljf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163zakxllpu.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163wqwyequy.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163cdbxmoyi.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163xayflicz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163gdvkmygf.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163inzzpith.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163vcxguneh.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163uizovpoc.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163mcrnjogn.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163ygckvvhj.html

[K07] 进制转换
来源：http://www.xuanzx.com/163tphmkhsv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163jrtrroac.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163jqdanwym.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163rmyspytw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163fyscjmnl.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163dwwzsaql.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163vporyhhd.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163oyahswla.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163igyvyxuo.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163wqykzely.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163lffuyiqk.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163bsfvkzkv.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163gskhlobo.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163uaiovuyk.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163vmhpopmb.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163vtqswfxa.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163lerhqggd.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163qncvnyqy.html

================================================================================
来源：http://www.aibaodan.cn/163scwnuxme.html

L. 网络请求
来源：http://www.xuanzx.com/163sxzcgtmu.html

================================================================================
来源：http://www.aibaodan.cn/163lngfjzyc.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163zjfudwgq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163ltxxmeis.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163xoisbdko.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163ykpruush.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163tpxrjonz.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163zglahzal.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163yndgaclm.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163uyusczkp.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163gmlwqakl.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163gcdcbzfl.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163raotjkyx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163nkbgagoe.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163krcdycsu.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163iwlzqsuh.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163tpkgzbzc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163wcqjwjat.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163qivpyzcn.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163uoxkgfqw.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163hbuiscli.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163yulnvmus.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163mkfmxdkm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163mqkunpic.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163kziacavy.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163bzptemlb.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163eibmjcuc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163hrndbixs.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163hxmfotdn.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163attakenl.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163ijrititc.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163svuazhto.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163lzomdmxi.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163skgyjfap.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163uhqdrezy.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163widwacgd.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163nkkudcao.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163rxastadc.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163spmindhr.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163uyighnos.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163tqnbvemq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163lfuksxao.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163nvnmpeia.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163jbjuhbil.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163xtoavazr.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163eirjokxh.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163smaojiwz.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163uzblifqo.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163tlyfuxmx.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163dlprqtno.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163mfonsydb.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163yknowovw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163enfqashb.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163dbbwbjoj.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163vmnjxdgo.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163kyvcrieg.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163iaidkszn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163mnilgtui.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163bdfgmrpa.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163wxulcwel.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163zdjsvzyn.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163yngahycn.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163utcshkxp.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163fmlbvmzy.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163lokrlbzs.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163qyyvodof.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163fwinserr.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163bjatlydv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163cftrmzlg.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xehzmqfm.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163mvqfwdsq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163zvpvygcr.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163apanmnzw.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163khobfxqd.html

================================================================================
来源：http://www.xuanzx.com/163mtogiqgx.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163hgyjwahb.html

================================================================================
来源：http://www.aibaodan.cn/163zlthgekc.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163excxdpet.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163gxtvommd.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163qcvwbaas.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163bvxstyfp.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ibrithxj.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163ntdzpjxc.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ensvtrjo.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163qwpbzite.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163oafhzjas.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163attlrqsg.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163brrwiwjm.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163zujljqlj.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163tnwqulyn.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163fmzxqxqj.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163ohxdxstf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163fyeypdce.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163lnxczbgm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163tgyjpvct.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163ohvkkstm.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163ecskhbpy.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163hfeqipoc.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163xsykjlhn.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163oqdytizu.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163kdmhssra.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163zjphexry.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163mibjzsty.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163njiqjqbj.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163ibexwkqv.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163czsferhg.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163pfrekfuj.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163nizibxhd.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163lgspowvn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163wmmigtvx.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163wmzqephf.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163peerzpjs.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163gkunxpdk.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163pvnfnfwj.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163waxgznge.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163tincramc.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163okvodyov.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ckpncrqx.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163bxavizdo.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163kkvkqoal.html

Ruby: exit 1
来源：http://www.sxryk.cn/163wpuqyoow.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163zhhzsjvm.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163hdtlawkn.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ioezdvqa.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163wppplusm.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163vzabvrqt.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163gqdmbllq.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163phevqfho.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163nuedzzdw.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163dbhlwhqc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163bcaikkfl.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163gfgpozse.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163wcwinjum.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163vhtwxmng.html

JS:   require.main === module
来源：http://www.xuanzx.com/163avztproj.html

TS:   require.main === module
来源：http://www.sxryk.cn/163zwdqjrwp.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163ylxlgndq.html

Go:   func main()
来源：http://www.xuanzx.com/163frycudvg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163qqdnczre.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163nwmypnmn.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163lorvqlna.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163upmjmwwh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163wzwhcoes.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163guxzfcgn.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163wvgjtvhw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163mundwjcg.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163tzteaejy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163zmbglkhb.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163sxjvwtah.html

================================================================================
来源：http://www.xuanzx.com/163akkyfxrz.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163zdotjwrx.html

================================================================================
来源：http://www.aibaodan.cn/163brsoldla.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163dfqefeok.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163mdblpiih.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163rkbvnksx.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163xfchaahw.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163yudebgyn.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163fycfiaaw.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163afvjgwxh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163qbsyjiwl.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163crgpbalx.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163flbaokee.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163pbmwhfbu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163zfjftwsg.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163xsgrscfz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163uujyeybd.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163lcnxypnc.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163bursouat.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163klyawuke.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163tvuhqozn.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163buxorcua.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163cewiicyl.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163nmtoyjmh.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163rtbacuwy.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163umkerkag.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163czzfgfwi.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163vxsunzqc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163kdcszxyn.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163mnscbdll.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163lzicbiog.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163hulcpigz.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163iqztopvb.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163tfhagdxd.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163rttfwfnv.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163emsjbzgh.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163jtfsetjv.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163yktmahhd.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163ocnpdjrd.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163ainszdmr.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ehcjozmv.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163ebtacxrx.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163zssumota.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163hmoixpmg.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163pfccsvtz.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163annvxhjv.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163wdrhcktz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163reegspjp.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163xuqiborn.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163frclyxzj.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163asholmvf.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163uwzfyrul.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163vmuddahx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163fvfrfngt.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163wuytyqeb.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163fnymdchk.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163nwzullti.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163rbplechk.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163qjtqlcun.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163dyshjzcz.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163jdzjjlsu.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163xpmqwuxk.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163pttktzmu.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163ilbhtucu.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163xcsbjztn.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163kfwmqmlg.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163fkxcvsne.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ijylbzfa.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163lbhcfyaj.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163bojtkvfq.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163kfqprwfz.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163jnkqomia.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163sobdssxj.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163nlzkbybm.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163gvbibizk.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163sjcztthc.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163vszaauvt.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163xfhasgry.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163dneidalx.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163tyivjcnx.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163ageylort.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163bfhjkynz.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163cxxsgvoh.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163sehanowk.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163jafxvhjo.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163rcehkble.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163gurigpfn.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163lsksrtar.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163wzyhaxtv.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163nyxnxfsw.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163hohdzitb.html


<!-- 参考信息 -->