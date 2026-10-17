外链999!wailian999！

================================================================================
来源：http://www.xuanzx.com/163eeywzsid.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163bytcudro.html

================================================================================
来源：http://www.xuanzx.com/163tdawqsbq.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163vhtetuum.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163kkivsfze.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163uhgeuglu.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163tgddamsb.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163gfmumhhc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163gtbfzind.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163rungpygq.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163ujgqwcet.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163cidxiubk.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163swndtjzi.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163kxsshipi.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163teubovkl.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163lbqeakzh.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163jcavwoal.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163cxljmggh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163pjnemvwu.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163kpborbon.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163gzhowdwa.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163vuwdirsa.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ftapyyar.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163vnaorfbk.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163oosfrzpn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163xophymzj.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163eeoqxxki.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163hxufzull.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163saryytmj.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163aduzlrbe.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163hgrmwhwy.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163uubelzll.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163wtdvcfep.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163afdseghj.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163avlpdsxl.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163qbdujicg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163iqiwpage.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163bdqntxdq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163qkppjbap.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163zrsowiyj.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163hyhjhyyw.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163hllvobne.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163xcsqvxlb.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163pgwiemmd.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163pfranlxp.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163ueycmgvm.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163tdrpvtrm.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163pjadbidf.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163zfgdunuz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163vfqszmqn.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163gprtnthk.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163harenzbh.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163dhsmauxz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163zpmvnxtq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ptwyklxn.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163hdgmshsk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163ckpccvlc.html

[K07] 进制转换
来源：http://www.sxryk.cn/163aiaarese.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163vexrnulm.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163jflrgdvw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163lrljyuvq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ftkrbwjn.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163whftllzd.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163wcyroked.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163svjovygc.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163kfydhrqc.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163kuvficnf.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163lecrcmbc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163rewpqgxm.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163jsbmcdib.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163wpbibcuq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163zsbpyswh.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ylblsxxy.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163uatxhfyc.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163mjvpnsfd.html

================================================================================
来源：http://www.xuanzx.com/163ttksphkj.html

L. 网络请求
来源：http://www.aibaodan.cn/163qsmefhre.html

================================================================================
来源：http://www.xuanzx.com/163baaeooln.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163nkjwshcy.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163iiahacdp.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163cefpgofx.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163fttzirum.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163uwvpcyxx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163mrfkcfuq.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163etxsbydc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163ddgttwxp.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163cnvbrmjd.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163vdzqgdpt.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163bttmevxz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163mkqpcilo.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ixxmphrj.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163cauuzpux.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163uuohjxbu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163npfdlpph.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163mwlztdfe.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ijreofbr.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163zstowvjj.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163srbfrgcs.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163oynicteh.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163dztahigh.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ozchhxjq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163mmvfqtec.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163enazddwc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163hldqtdwa.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163bcectanb.html

[L04] 设置超时
来源：http://www.sxryk.cn/163xhpgbain.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163uxvqsfju.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163nyzlnqxk.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163vmthizcw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163dopgvbcf.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163aptzqttf.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163xketyeiz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163owitvcun.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163umurtlgi.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163dbtxzslh.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163bwescctd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163biwirrgq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ksgxshal.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163woepkawz.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163cmwpbrwm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163kesvrihk.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ryelydjl.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163hzranjvw.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163iqwiflsz.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163qrbgowve.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163fhniatau.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163kraapkwh.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163bwaiefzr.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163fghulfiq.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163yqfqlmsh.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163dstfieei.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163bwygengr.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163ojdyvwgd.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163xpreonvp.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163qchxidma.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163lodycfxh.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163azzrzhqq.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163pjipyuqz.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163tqzvojyp.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163tgxditgq.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163iidtqgbj.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163rlrnpwoy.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163rnecynue.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163xqmdtzqa.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ytoigoon.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qqcmsinh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163lcafginl.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163oiwbfzjc.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163wtqivafh.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163sgszaddj.html

================================================================================
来源：http://www.xuanzx.com/163vdavfkhx.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163zabwafeo.html

================================================================================
来源：http://www.sxryk.cn/163gdejynkv.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163rnxdegas.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163dzsrjrjd.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163zkpfsokb.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163txhoummy.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163bemtthhq.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163heenrreb.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163otngqrkl.html

Ruby: ARGV
来源：http://www.xuanzx.com/163kuarumhp.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163weiepetk.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163bqkljtkk.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163rfyywfau.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163obtqggoj.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163vafyxysp.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163rtnaevna.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163wyccpqai.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163rlcmvyle.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163biibsxtn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163zqldwlls.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163yrvkpkxv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163ievuyxxh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163shomixus.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163rbpymwbn.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163wiingxcg.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163mnishnyh.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163ejfzktik.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163hzlobizm.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163exwghicw.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163rfrudwco.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163hdjhlifk.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163zdryuuxx.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163aznhenlz.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163iyqgnpvs.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163lqqxzdyh.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163pcbnsykg.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163nspseorj.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163fmoqhlvt.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163yoluvvte.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163qfzppvta.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163hfeptroy.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163jmmcodef.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163uzvagkjn.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163axqndoch.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163efcdlifb.html

Ruby: exit 1
来源：http://www.xuanzx.com/163ayavdfbi.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163yealaipd.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163vykcphmm.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163pfduvmra.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163dexkamwo.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163vhqjnbhv.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163wuwcmpnw.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163fcnnsqjl.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163ktlvpsoh.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163rnzgppqp.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163rfqyevtg.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163zahrwwel.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163vluhzguo.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163buqipere.html

JS:   require.main === module
来源：http://www.sxryk.cn/163oihjbtvb.html

TS:   require.main === module
来源：http://www.xuanzx.com/163jplhfiys.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163snhufkrz.html

Go:   func main()
来源：http://www.aibaodan.cn/163muidxxlk.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163tjitqqft.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163wlyxgpik.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163jcxxxhbw.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163zwjsvsvd.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163fwnsnplk.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163rnugkaux.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163rnsicbdr.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163zjeeiykd.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163ltclxcgk.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163vmwaomkn.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163kaxbcrho.html

================================================================================
来源：http://www.xuanzx.com/163zmrhatrn.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163eapawuky.html

================================================================================
来源：http://www.xuanzx.com/163aijxfzck.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163qqdgcbgr.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163kkuqhcdv.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163gatfbvqn.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163jsttcqnu.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ebkwvabg.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163tzeidrua.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163lachjlph.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163wfnvofzc.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163iylhpszu.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163tvylrpeg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163wenlmuze.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163ofxcxyjz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163eyazljyc.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163nhhghxrw.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163uykatbta.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163jptzitjc.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163hdggmmlu.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163eplpzqzh.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163mouailqs.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163izsbvxct.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163xklpubqs.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163bngrtwif.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163uhtkxrlv.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163mizoghog.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163ktrtqafd.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163unahflgu.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163spkokhww.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163ukspvlpc.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ojgafelj.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163cvutlhim.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163wcerexmi.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ejsnnbek.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163vvlqcfup.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163frpktdip.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163zoifpieu.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163fuayahvl.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163ztjfokwp.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163knljyoxl.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163ecxqdvax.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ihgxgbyc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163adkzblyr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163zuiwgppm.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163fxocvdfu.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163jkxxkegl.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163eduksoya.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163wlrfzfek.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163omozltmm.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163htlvgomw.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163cjpzupox.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163fdyrqhkr.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163cyflwwxb.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163sbiezmyx.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163pzftvdnl.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163mhufrpnv.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163swrzpkmi.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163teuumjxy.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163cpynbazb.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163iokutjrk.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163zbbosumz.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163gkmuvlvz.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163vspezzjf.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163lrdmpzwz.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163jymwhsey.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163koiiunqk.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163macnstbk.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163tkpzmifl.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163cvablmpa.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163sifwdnrh.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163qpicwele.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163ykldrlet.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163kbfgqhjw.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163nqklklap.html


<!-- 参考信息 -->