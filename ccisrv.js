外链999!wailian999！

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163rlgpcbij.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163jqwzylfx.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163loncvvry.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163mwxhiqqz.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163qxfmjbrl.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163thyyhnvu.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163yjztsdsk.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163kwmvxcub.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163alhjntcx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163kunlqoqj.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163zxfwkydl.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vciaotvi.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163flpsbufv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163oaweifpf.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163qaurpqnw.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163nsrkfvtj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163gpriecfy.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163jviwauoe.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163fyeodibg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163pwqooorz.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163bvsvgdag.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163dlprfulc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163vgbjdwdq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ydtnifvb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ljmyuktx.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163hqvitgxw.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163fvklybak.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163kvbozrkt.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163jlxocyez.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163pqcnhbfp.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163pmqmujoa.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163qhleotnd.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163msixolhg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163rrtjwjwi.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163inlrlulo.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163wwyuxxyn.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163ranorkiu.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163wgcbarzz.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163xummglxi.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163tuanocsp.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163prvbswim.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163vfljfkwr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163lekbpcws.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163upzzefdk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163hvtyunxo.html

[K07] 进制转换
来源：http://www.xuanzx.com/163hukfgpvt.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163yeirgnsk.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163gvimqgdh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163nyiqvbsd.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163yexckjgk.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163jszudrww.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163hxatnoup.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163merupotc.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163ecepeccf.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163mrnmnxqx.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163mlmvrqvv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163zdbjywot.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163rbbmfwwo.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163xzjkzpqk.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163lrgggzem.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163tjkhfket.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163yasgezmv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163rdzdgfim.html

================================================================================
来源：http://www.xuanzx.com/163yhjmjwju.html

L. 网络请求
来源：http://www.xuanzx.com/163qgsptspz.html

================================================================================
来源：http://www.aibaodan.cn/163ckdvrgkt.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163eyqwrane.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163zrgsfxcf.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163iveruqaa.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163xkeawnhy.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163sfwhihsc.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163cacwpsgf.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ffhqliop.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ytsesmdo.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163ljgjibcd.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163zayblmos.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163dzwvrxku.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163icmlboqe.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163zubfyliq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163fnysdnsp.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163wwbqaxgv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163cavlgdtn.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163bnnragxu.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ateedmtu.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163cuogusll.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163apholpnx.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163dhanaker.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163xooalhum.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163bgikzoai.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163yxuujbup.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163mubpztpu.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163pwpphohu.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163srpmyeil.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163ydqisvso.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163hvogqqut.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163bfyzrhim.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163jmlcxqju.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163gliubzus.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163wtekdgsp.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163kwghiqvv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163jthiqazz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163jxwmstfe.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163uxkgjkhm.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163osmkjbkw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163syikkwzb.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163sbconqbr.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163fijmhmfv.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163jivifekx.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163qnfxdaqx.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163ferkbulw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163xgoimoej.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163svudpmcg.html

Py:   resp.json()
来源：http://www.sxryk.cn/163xqnruzic.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163svkvodio.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163bsftnbpm.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163kgvwlffe.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163lxkrwrnz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163puceroin.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163wuvstrds.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163bgrvafsc.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163ndaeyjcm.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163nbitpogl.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163prjmwdkk.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163yrxxvbuk.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163uzlqfjeo.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163zlzdorqp.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163gyosegyg.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163kjcdipwh.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163kswiyyia.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163qzltqdxy.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163bllzxxbo.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163hrzcjshq.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xiijubul.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163odewxerw.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163lxqmixxf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163wffrqhmd.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163bbqkdkna.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163gecicbsk.html

================================================================================
来源：http://www.aibaodan.cn/163dbrefijf.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163cybiqamn.html

================================================================================
来源：http://www.sxryk.cn/163xrgekwgq.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163nvkoodzp.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163iecmxyib.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163hqjfemrs.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163oetpauuo.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163qjiuqlnb.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163endzvpur.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163scatdxbn.html

Ruby: ARGV
来源：http://www.xuanzx.com/163ifdvbxgu.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163hhlbncoj.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163opooxzqn.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163yrgrumvg.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163ktkenezk.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ksaxqawm.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163bwkftslh.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163phybhptg.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163imjwyzgl.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163fgtvvcmn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163vdmlkent.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163jqebyutm.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163jlpdyymu.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163vknnrpxs.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163nqpmmjvz.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163irntyuur.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163mjpqhhnc.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163uhjyrqbx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163sdggigxx.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163dfaudoyn.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163ujtbyavi.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163adeyrlth.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163egevnjan.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163bkirjzvk.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163mtteugog.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163tkvjheng.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163pwovbwac.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163krghupvz.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163czbiqsql.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163djboongs.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163dymvbdel.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163aqibdlka.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163vvoqeebu.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163wmxhgxeb.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163zjahmmjl.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163ddmncubs.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163tujfobkj.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163ucxrgzng.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163syngdswp.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ukrqgwfo.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163bmtlcvgs.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163bshppfsc.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163bhfvjpjf.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163gqzguyxc.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163ujvudgvy.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163xylwxama.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163iejpvhmg.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163xkrfozav.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163wqcmbetz.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163eqikfggw.html

JS:   require.main === module
来源：http://www.sxryk.cn/163vgvdfpmv.html

TS:   require.main === module
来源：http://www.sxryk.cn/163oebhuozq.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163ylewensl.html

Go:   func main()
来源：http://www.sxryk.cn/163uziimdwc.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163rxldwfxy.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163ldtaafwy.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163rpofbcbc.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163uyfqyykp.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163ojqzjmuc.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163vcynkdwh.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163upaindil.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163tfmwnzom.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163humrcevp.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163ubuahgcm.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163yfcutphv.html

================================================================================
来源：http://www.aibaodan.cn/163uwuevwre.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163hyaenqxj.html

================================================================================
来源：http://www.xuanzx.com/163mfhqfrdi.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163gelotemu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163yrxfgmzm.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163wpjksmca.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163bovfidih.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163sgthkskh.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163nsgoeiqt.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163exspqnpz.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163drnueamd.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163qostzshv.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163wohiutos.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163sjvzhntt.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163vdyeivuw.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163wfnowhxc.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ccrmixsy.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163sdpvbirg.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163fbexuhfh.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163iittsgso.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163mjolcpfn.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ajnvjceq.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163xqszbnya.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163sxuusddf.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ibgonzky.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163wsdllkcn.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163mwftwkjl.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163uhvzqoaq.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163yoxstizn.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163hqzwzdka.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163usxiqbni.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163uwcprnna.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163duidbefn.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163qisqiqau.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163byceispl.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163okcawugm.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163oiqpsgnn.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163vsuwadhd.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163aagbuzyy.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163nrrmoaks.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163fajwyajr.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163bhjdbnkn.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163hwkmmlss.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163xqdhphvk.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163ocpimwrb.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163fsscmcax.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163hqtwwhjn.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163ezwhkbbh.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163rpzvlpge.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163oebmbpqe.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163iqheqivg.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163lvuhqjmq.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163dctxoaag.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163fqhyujcb.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163oevzjjie.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163pxdibaca.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163vfvwrvyb.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163voxdrdua.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163gpadvcyq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163oszjohev.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163laahtepl.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163wkguksyz.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163stksfitz.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163ayjssjcg.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163fpnueoxb.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163vxcgbphk.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163fygcjhec.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163pyzkxvja.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163vugklfuc.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163kiqfprbs.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163uqeybnfm.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163liorvfia.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163iybzwkyd.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163mixjfywl.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163yopjedqt.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163fjyjgftl.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163lxcvjjzh.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163sbqzymvy.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163vkvyousd.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163hrntihlw.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163fvpeyhnv.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163zzigaevg.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163ysbllckg.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163dkkptpce.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163alqqhaix.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163opsfucqg.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163lymluluh.html


<!-- 参考信息 -->