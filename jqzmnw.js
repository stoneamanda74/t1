外链999!wailian999！

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163oirjieco.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163iyzpkjll.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163nrvlqsfs.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163erahdocg.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163bdxfrrcr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163wevuxpgc.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163sgxvryuw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163eydudkpq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163yntbbouq.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163cywqowvs.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163wxzbemko.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163sfqgyobe.html

================================================================================
来源：http://www.aibaodan.cn/163jbcrffev.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163wumadook.html

================================================================================
来源：http://www.xuanzx.com/163dnikfwli.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163tqxjonzy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ngbxhfgf.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163wwizdxsi.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163chlmhyhu.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163nxrhhwvg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163mmxyjanz.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163cirpjjtn.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163nsdscoxl.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163tzcduara.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163dxsauyrj.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163jijltsmu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163dneizkgo.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163sogqdkuc.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ujkdnbvb.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163qrdzdfhe.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163tonklaxr.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163vsrmusgi.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163iyyseknf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163dngaykib.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163htgxqhtm.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ylfieioi.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163czwjvpxm.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163bgogiive.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163myvylxjf.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ajsixfng.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163txzhyzmg.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163nmylxugb.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163dxiptejh.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163tbidggii.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163comskaoy.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163zmsfotzo.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163tsttxqiw.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ewygyaqw.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163vpgddtho.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163rokutnrs.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163xzigtupp.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163gxsesoog.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163gicnltng.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163yatfgitn.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163jcwiqaxp.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163mhedsxqq.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163pbguzhgf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163zojolluw.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163msaybari.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163vvmbdace.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163sktjeolg.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163godglanx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163zunlbnpq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163vdtdyyda.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163dbptmhkq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163tqvodfxd.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163jatrksvc.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163qkmsyizg.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163jlchhlto.html

[K07] 进制转换
来源：http://www.sxryk.cn/163igmffnvb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163unmhqskn.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163fiykpoop.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163fpfzpius.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163pqvudbji.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163esquakca.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163lvlbllqn.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163iessdzqf.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163tljsuqnb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163gdmalgfs.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163nlmhvzub.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163ddgrxygs.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163fozisphd.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ucfigkkr.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163buegruzz.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163odjgokqv.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163wlxsqimn.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163johhdnys.html

================================================================================
来源：http://www.aibaodan.cn/163nmoagrkp.html

L. 网络请求
来源：http://www.sxryk.cn/163yjazngal.html

================================================================================
来源：http://www.xuanzx.com/163bteaaesf.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163kcbeqiby.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163kxloynqe.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163dgykwhzi.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163dvzfzykx.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163fuvjldnx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163qgndhtqu.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163chgjkrlf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163wulkhbcq.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ydjsrmgr.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163vkgzzbcg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163unboohsu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163pzdlfyoq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163xvfvqrgz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163isifayqf.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163ybmoquhp.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163aymzlxlf.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163tokrailx.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ccuhwqoq.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163iqbfmpsr.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163dejjfvno.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163wqzzdvfu.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163vcjpphdl.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163aijcqlmf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163qsojecxg.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163eajxypgy.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163kbwmhfjn.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163mpjzyjke.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163wmgcmbcf.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163apvdzsgz.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163tfspzttp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163oafukjfy.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163qodajawt.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163nzljcmcv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163fqvomzfe.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163nwhjvfcj.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163prmdotsk.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163oirlcaqa.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163vmbwzbul.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163snadohkz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163szlkldqo.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ogitbded.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163ytpchntg.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163ewahfbdo.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163dkdvtbcu.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163inbwqwta.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163ooydifwf.html

Py:   resp.json()
来源：http://www.xuanzx.com/163zdwrqxym.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163nzdopcwg.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163iujwiavy.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163gqkpqcxt.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163zuwnboza.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163gsyvwdch.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163lpdrgjpj.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163nueovlfh.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163jffpkcxy.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163uqguadrs.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163eqlzjied.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ucqlvhte.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163kqamchws.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163ggelwwoe.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163hqhcrvme.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163revuartf.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163mrnfmjoo.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163lwbwabrk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163qbueubyy.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163ouhkataa.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163tskriefu.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163mgjlotns.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163lclalyzt.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163xdywtrbr.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163zotjvuyt.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163pgpzcrkf.html

================================================================================
来源：http://www.aibaodan.cn/163swbdzrdd.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163qezvdudu.html

================================================================================
来源：http://www.xuanzx.com/163kqrkfqin.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163onutlgfb.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163txejtpik.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163pqdfqsxe.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163aqxxkrjc.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163pxxjrxxq.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163vxqjhspa.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163jorinqdu.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163evpyrnze.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163ttqzyclg.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163vhcgmjfy.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163sgqeroap.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163affjmxmo.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163daxklkso.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163vkjtklrt.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163nlnnruxp.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163qyrmqfno.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163pxevkwdr.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163qubrpdhs.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163kfhtwwlo.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163keivktei.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163uhutroce.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163omlbphpn.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163msocnkiu.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163phxujjrn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163lhuarwau.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163wzghdpkf.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163ltpnhwwp.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163shtgmiry.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163otgpcxdt.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163ggclwilm.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163mfwghcrw.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163ftspgfbv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163cnkgrqno.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163atmaaqhe.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163egsdtytm.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163zabqcczz.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163uldbelgt.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163zpmtolyj.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163nfmnpifr.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163bmpkagnt.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163qncfupib.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163ldpiwwta.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163mqfolnyb.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163ikrihydd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163qqricobt.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163dwhfdnuq.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163mmojxamp.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163nqbbqbic.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163tzouhiox.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163btwirpfd.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163qjnvwmmb.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163toxwpqiw.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163lpjfrtzf.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163ucfkjzne.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163ckuvsoiu.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163fpoibwmm.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163xepjxged.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163dzrrlcwq.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163xlagvuwn.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163trsylone.html

Go:   func main()
来源：http://www.sxryk.cn/163vxhesiaj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163hebvmnmu.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163njqfoubd.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163iuekryia.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163dxgywysz.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163hnjctwak.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163sctfhsuv.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163fawhbphy.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163gycbrxvz.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163koxderbm.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163poyqjzcq.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163puxzvhsk.html

================================================================================
来源：http://www.xuanzx.com/163qvyfqayo.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163rbwgfymd.html

================================================================================
来源：http://www.sxryk.cn/163wtyfguye.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163leoproal.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163cbfsyyyj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163olkghuzr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163fswkevds.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163wqzwotho.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163olaremtt.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163oyahrrjg.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163jofujcaw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163dydhjxna.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163fovvhtgh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163kmhovexw.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163haowlvck.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163jxooswdo.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163enjdbuzs.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163pimhnpjm.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163uxkeqjmq.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163mqfgzsrv.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163ppuurxkk.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163bdagqyai.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163kmdnjswa.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163wfptszuj.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163tzcdxxky.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163uiegtpkn.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163fmmesjiy.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163lfrwoahw.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163wsarswtv.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163wffvvwdw.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163aytdmufs.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163butxkehi.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163mngscqie.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163utsrrbxo.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163pdgzpljl.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163yakeluge.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163loiorvtl.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163pradweud.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163mandxbkn.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163msunfzyd.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163hdywmdfz.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163zhmguxec.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ahzslhxx.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ipezjqjz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163nscgiprr.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163odapjgxe.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163hujyjuxl.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163jfqtunbd.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163gscmilyh.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ivrfsqmo.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163kbtwsazf.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hapqydgt.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bdjzxtok.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163snamljvo.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163eysnqzkp.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163xagdgosr.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163zwukoobv.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163pybizdds.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163pxyyasia.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163rgmhquie.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163kclzfgqv.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163ifrefsxz.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163gucnzqux.html


<!-- 参考信息 -->