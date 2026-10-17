外链999!wailian999！

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163xyldlrsp.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163sjkufnoc.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163mzyxlcze.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163mxrwdecq.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ebwvplvi.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163wvdcvpvl.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163yqfzypwj.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163twzvnpnb.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163axddrxaa.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163wcrekxrb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163orngneww.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163pmxdczfv.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163aocgnvrx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163juzcqmtg.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163ieikqfsw.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163ljdwvpfd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163plddiroy.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163fgjdakqn.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163rbailfrf.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163glwafazs.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163pureiyow.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163dfjxtsoa.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ioaivsgy.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163hfwrcttu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163xsqkewep.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163tnjvlgxy.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163uuiltzmz.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163jugslaht.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163plpljyna.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163xlwpufmh.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163xidbfjje.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163rhoqbihv.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163dnnmyuni.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163dybzmsze.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163awlibnwm.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163vciuufsq.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163sqsaunfx.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163sihhwiiv.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163kvghouci.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ggoemiec.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163jvtfxmoq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163vyjdicnq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163botfaqrz.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163wvjozdvk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163idbwfkiw.html

[K07] 进制转换
来源：http://www.xuanzx.com/163geligelc.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163rzbtxwkt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163notvuzdh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163dspfueqd.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163xcdlpxqz.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163otmqlwma.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163obbdtkjj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163kgjhbmkf.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163eoekgfsg.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163kcfbvszq.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163yjsgxgem.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163bmkriyqn.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163mecxvkkr.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163jbdrccin.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163yuiksjql.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163jutysszv.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163utiotvid.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163xpokdzgc.html

================================================================================
来源：http://www.sxryk.cn/163ajklemch.html

L. 网络请求
来源：http://www.sxryk.cn/163rqdichxq.html

================================================================================
来源：http://www.sxryk.cn/163xcplhcmz.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163lezkbdbh.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163vqmepkvp.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163ezkfynsr.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163uqgqbpiq.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163wkpiyamv.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163nsbvftwj.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163zktkzbsf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163oziwoxtm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163bwgehkkt.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163ozdodygi.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163kxmopfey.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163uvvdbqan.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163idtwmgoz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163jgaqckmj.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163quvgpjoa.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163ustpxork.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163ohrcnlbk.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163dqlwaqna.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163vpnckkik.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163ujfadrzr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163ipsllisu.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163vuftaptm.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163cvvqwmho.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163kvwvclbc.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163anenljgq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163onrupntj.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163wwngohwg.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163jdvfkcix.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163avrkgbna.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163vkgzbnyl.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ydjpzxtl.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163vwreccoz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163lsqppufk.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163aqgyhkjj.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163cqagppzg.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163uroiwwds.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163jtobiwfy.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163ceughrte.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163kamalicj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163mbzqtwew.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163asjtpjex.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163rgqfzcnj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163plrpjbay.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163oxpdryvc.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163joaeangp.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163malzxqfg.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163chfokqcq.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163wcphnjrr.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163ccwglrhd.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163gvlorjfk.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163cxvtbmgf.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163wwpfmgrf.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163vhclzksr.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163exkekaby.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163zxxvpvdw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163abdqrjpb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163tejeyeez.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163jwdjlyrc.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163cfvxxact.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163buzjbvoh.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163oghpfrjx.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163upvyoexb.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163yuxlfsqm.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163bskctbuy.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163nvxecksi.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163fllbyovh.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163uzapgjta.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163nqpkbazv.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163gfkefjnu.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163txjlgoyi.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163hzgyqytv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163djriyuvi.html

================================================================================
来源：http://www.xuanzx.com/163pgjogckz.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163bubxtpxa.html

================================================================================
来源：http://www.aibaodan.cn/163ywlrpslb.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163uscubfoi.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163mdokljja.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163ptebxwew.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163stvtperl.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163sysudbwk.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163wjxojnjr.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163iyswszzq.html

Ruby: ARGV
来源：http://www.xuanzx.com/163fpihajti.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163hjzaneyw.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163rscpfoie.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163bxkoaffx.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163vnunyejr.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ydfdffuz.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163bffausjy.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163riixfmah.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163lfqirkdj.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163jmduuayh.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163elbjsscf.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163lqeecdev.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163efvbzczh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163rrqfilrh.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163eizizned.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163hznzaerg.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163qnlckubr.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163nojuosjd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163vmpswsrz.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163nkwzsnuz.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163suwvrjba.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163buhrwsit.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163cupavqhu.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163hdwyjgpv.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163bhdgkcvg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163mgfmjkfg.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163qwvofpsg.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163kebfqkom.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163lfukyphz.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163vcvbzqeg.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163wtqgiuux.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163hrajizrk.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163smylyjxs.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ovyqipwy.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163ekywfdcc.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163etlestbj.html

Ruby: exit 1
来源：http://www.xuanzx.com/163kcytvzbi.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163mdyeiszi.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163yqgnaoxw.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163aixflngg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163enywowdi.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163cpbgylir.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163rytsmjwt.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163wwaiiwpf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163rywidajb.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163pifcrsac.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163mylxwyen.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163hejnnhcc.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163qptzxnwt.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163nkigegul.html

JS:   require.main === module
来源：http://www.xuanzx.com/163duxgwgig.html

TS:   require.main === module
来源：http://www.sxryk.cn/163wrwrykux.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163gxfhyvvt.html

Go:   func main()
来源：http://www.sxryk.cn/163qhdadjrw.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163onwfswux.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163gysbxcwa.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163ybgojcpj.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163hrjmaenl.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163luuimnbz.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163zlqwwbmm.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163abyrhgha.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163nxhxfoap.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163puiilsdw.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163oayivtys.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163piamejem.html

================================================================================
来源：http://www.aibaodan.cn/163ormdkkdp.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163cxltdswi.html

================================================================================
来源：http://www.sxryk.cn/163spsbryxu.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163krrcxbfz.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163wmbllhmt.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163syxmhwce.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163xsxqnanu.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163wswblzau.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163qsksqdfp.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163ugxwdphj.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163uixrwqjl.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163mcmmtnzs.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163jpkttzxs.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163erujnjbm.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163uvpasowa.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163wkvsebbh.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163trqatdgl.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163svkdnsaq.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163ekyxvbao.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163wusdrgaa.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163sjbpqzjz.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163pggsnfvf.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163hokpgspk.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163zqrqgsnl.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163rqzgriua.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163pckgwwyn.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163jompifid.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163boqtfpee.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163tqgmzgcx.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163tqvzbplh.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163tdfwzzan.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163mosolpkq.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163qnnugaed.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163cjlmvurc.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163umssuyra.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163mmrllavc.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163oxdlbjyc.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163fhyqsoez.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163hawxsdhs.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163taxmkmqm.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163cnhawohe.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163hzzaqztw.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163cebzciha.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163mhmhhypq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163fgyqijfb.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163glubenkt.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163zyirihtw.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163dthmsiiw.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163rrhdfxlx.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163ljhtceqp.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163ihmbhnjp.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163xhhmepcv.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163dftrethe.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163rpoevqqm.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163zmzfamhx.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163qglwlokk.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163volaejiu.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163rslnokai.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163whxefbuf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163mqiwkdau.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163zddyiggs.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163apzsergw.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163ygtxrztg.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163ibehxiiy.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163tsbjpbcw.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163mpbxauyi.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163ewuqojrv.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ykphhwzq.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163yevzqzqq.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163kntxmelk.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163vbgsaftp.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163pfyccikj.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163yygyyotj.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163vgspzzse.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rggfdcxu.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163kdkklbqr.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163kgzzcyey.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163wkosrsja.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163sglnsavx.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163wyexaylb.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163xcyglvda.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163qpsftxfd.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163gphcydin.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163gqzfkkwi.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163mzurzbzd.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163jsmwlian.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163ndmxafbx.html


<!-- 参考信息 -->