外链999!wailian999！

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163lqmtcxhd.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163fhiaesvl.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163tbaouljn.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163zmicerzj.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163lgfkzekc.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163nvpgcwyw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163vrbkqfli.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163uocafved.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163gmndhyoe.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163alkfqnvr.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163pymizeaf.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163jmmuuxgi.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163gmoimudl.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163fomoxakq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163mvqrhgom.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163xemeyuiw.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163zlbnldcm.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163nargpjgz.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163jewhddlu.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163rwpittan.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163riurpfio.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163qcycrunr.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ruurabgn.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ckpxdfsn.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163otntrjth.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ricrbcsc.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163gjxbrmcu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163mkkyuudy.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163takcmebe.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163jnkcexkp.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163hwhbemmw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163dhwnlpdz.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163xjelmjpg.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163iltrvfqr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163eirbsbun.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163qicdttaa.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163morvarbx.html

[K07] 进制转换
来源：http://www.xuanzx.com/163xewxbmuf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163hsycysbz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163kutnqvcu.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163bzdsucsx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163cvhsjauv.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163rotjhlcg.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163zwqjivvw.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ppicyadp.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163zehurufb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163vcimalyo.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163fwpheuag.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163itfzcnfx.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163aiokbnya.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163gjcmztad.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163kidiaxdw.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163wtyeqqvb.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163pineawcj.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163dikdfkuu.html

================================================================================
来源：http://www.sxryk.cn/163ftvimeuw.html

L. 网络请求
来源：http://www.sxryk.cn/163hzmpiyei.html

================================================================================
来源：http://www.sxryk.cn/163nczhxsku.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163axhcybmk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163nnbxvsng.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163tjmbyzzn.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163itixmdfi.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163bugtytvi.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163brobyadx.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163rrqjcvyl.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163gpwpykvs.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163sfjevuok.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163sfyculqz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163yifubsog.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163vriuefzc.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163obxczxld.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163lhgwlzat.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163nlvighoa.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163aimjdiqv.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163aankqahp.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ggiktedg.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163qflbdlfy.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163mwrhttiy.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163bjbqiwxg.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163egmynqjd.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163xoxygucm.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163uuyqiigw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163mqvqszrn.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163evlzmhdf.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163fszujrnk.html

[L04] 设置超时
来源：http://www.sxryk.cn/163fpuiprno.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163mhtjkgmj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163qyknutiv.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163nwfnenxb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163tcmrsdol.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163gpglnbhk.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163cswhnpsx.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163zfwlacwo.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163baqqrncp.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163xkcdegze.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163lisicuid.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163bblwlvbl.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163akimnxou.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ilnvajgm.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163hxadrfid.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163bmrlkbri.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163mxcdytuu.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163bbemtqlv.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163cztbrhfg.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163cgzzjdmk.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163kdleppff.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163vggoukam.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163rjrqkrxj.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163sktayerb.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163pdudccbp.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163wjodpmjr.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163qwttrmjl.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163tfybxpmf.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163xrrdylav.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163pghqyarf.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ujfcxjpa.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163xwfewliv.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163syflcgrn.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163jjbibrsn.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163cghratov.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163xmkklmyq.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163gqmmyork.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163ihbwfzso.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163qjzxqhnw.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163eogkydog.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163dkmbrpqg.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163cshsmkss.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163xtmhgpwk.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163qwmmvkln.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163godylwij.html

================================================================================
来源：http://www.sxryk.cn/163lrwwblbh.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163afxyxufd.html

================================================================================
来源：http://www.xuanzx.com/163cxtdpfnz.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163jwpjsqng.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163ffgbowiz.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163zdbdjxov.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163cvuihynv.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163xjnttrvi.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163yunrazzl.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163oejceqvp.html

Ruby: ARGV
来源：http://www.xuanzx.com/163okzzjoaj.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163cfrrzteu.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163lqwalqqe.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163nkevpdme.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163jepagryn.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163cnlmgdpl.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163lshuxnsj.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163zzrbuwrb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163icfzootb.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163lypsibag.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163awyzfnvj.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163jwsaclbf.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163ynorkmgt.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163pcymfgmr.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ztzmeluo.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163alecoard.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163zpdmaspi.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163myitsvre.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163illakgln.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163yxgiqyex.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163ggylmjvr.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163ldkkousn.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163eosdemoi.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163eyyucmic.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163asiynbpl.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163djpsreis.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163xjnmuzke.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163lskyonrn.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163taqffzsq.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163juuqbhvj.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163hsfvttuk.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163ngzzlpvx.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163eqtyhdvd.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163dlcipuof.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163nonwcqmr.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163rxshajkq.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163ugkrlvvu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163oavmblqb.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163hpdmqzgb.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163lkfdcbfg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163fsixhstq.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163zydiznzv.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163rhjgguzn.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163sbuoobec.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163ynjhpzac.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163sijclggi.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163kqdbfzbd.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163egwlqwvz.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163ngocdlej.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163ddfyqddn.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163gpjabaim.html

TS:   require.main === module
来源：http://www.sxryk.cn/163iuvkbxbe.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163masgfhov.html

Go:   func main()
来源：http://www.aibaodan.cn/163mcmuewpt.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163xxylkwci.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163xhpfarsd.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163hxjkqyvg.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163mxajmvzu.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163gwzbyrte.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ehxodpgt.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ffyrfjwi.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163dktebflk.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163jfbwqqrm.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163nwgaomrm.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163wrejsvwh.html

================================================================================
来源：http://www.sxryk.cn/163bofgulce.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163dalyonrv.html

================================================================================
来源：http://www.aibaodan.cn/163ltcbydvt.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163xlxqcxpy.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163gjgnroag.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163bplyyseb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163hpkiplbd.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163czoyevsj.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163vajwqftd.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163yzhcltmx.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163mshtnddd.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163uquecquh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163kwbusjeo.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163fobarean.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163rafcwwyx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ymwnllvt.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163gchaoxdl.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ktfgivxb.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163zitmdupz.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ltzsqlbv.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163fpbjplnm.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163ddircrey.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163toilcmbi.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163eauntowu.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163apscnrrd.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163tiyexlbw.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163ybkikqry.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163erjeudpn.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163kkhwaoyt.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163ufhplsog.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163ulfythva.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163pbvkhgtx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163eycxsufl.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163iiolbabf.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ocikxuqf.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163jlnrqxcc.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163ubkilaxp.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163fkmwftif.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163xjnkhkvs.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163sspwobty.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163awxczxyk.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163csphfpgt.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163oaztagsu.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ubqipdbe.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163liiqrplq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163xbanwcgq.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163ptwoqvez.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163mzsavdzm.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163kfgqietu.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ihzzubeh.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163jgukagks.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163dvjshkeh.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163wbtydrgg.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163pmfppuwd.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163yviuexpy.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163dsandute.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163rmmchieo.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163nfuzrcdh.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163auvjotdt.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163vaunlnyd.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163bwiprtgg.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163yiesbglh.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163pkgpzxbd.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163vmqbvqvj.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163omimpvky.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163npzwtxtu.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163echsdtxk.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163rgosphbn.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163mqyvdxvq.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163gjclcemg.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163dvgacwuv.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163otxcdkni.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163htxldxdg.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163zyyelqfe.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wrhgiqfp.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163iwjhafrk.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163qelfdypb.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163qfnnahjg.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163murjosyl.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163vfantkpg.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163jdpuvoku.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163sngklrxf.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163sgfnnaxf.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163hzhdvwpk.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163vsxxbcmp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163otsqlxqp.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163uylfvkis.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163dlfqdopp.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163fjpeaxsw.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163ojqvhcqo.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163uvtoislk.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163rribvzgm.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163ozdterkn.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163uphheiyd.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163oogbpevc.html


<!-- 参考信息 -->