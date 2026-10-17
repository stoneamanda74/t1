外链999!wailian999！

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163jmogsvop.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163mzglrgyv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163ofqrceeo.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163nbekicnq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163igveqxbw.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163epdvhqyo.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163bbqagukr.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163iozsoqgi.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163desmkkjw.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163oiavuxtp.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163keemellh.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163yrhapocx.html

================================================================================
来源：http://www.aibaodan.cn/163wwrmhyhz.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163tmdixzkn.html

================================================================================
来源：http://www.xuanzx.com/163pbjsopqc.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163phssvngh.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163vkaepgvx.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163tbqedhea.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163omizzkkz.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163hhfnrofb.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163fvmpognv.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163durefjum.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163sqkoxuhy.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163fcwptxmv.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163iowioqej.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163fdkeeopo.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163dskpxqmb.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163snzbwbvw.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163eqsfypjr.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163buvrlkzn.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163pldztsos.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163lgcljewu.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163sgfcxrbg.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163roatojtr.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163odlzsgyn.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163cicwayop.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163bzttulod.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163wiyylryx.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163wyljkgxp.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163vbxtibet.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163fyztsnkw.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163zfvcoyvb.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163ndvipirk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163ziehgbtt.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163tfhoohax.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163mlgfagll.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163mxsaipdl.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163kvbpivpr.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163nekzwfci.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163dloapwvl.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163wnrowtgc.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163hvrjvwuj.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163kknarlii.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163rlhkfwxa.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163vieqoezt.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ksdgfkbg.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163uiomszoz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163uvpedsrc.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163nazwzqxx.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163mnrvcmpe.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163nbetqbvq.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163pxrtwboy.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163tgjhczgi.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ckdvaxka.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163lpkvdttn.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163rhezuqja.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163gkbppnvc.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163jjtbvsjf.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163vwrzfhck.html

[K07] 进制转换
来源：http://www.sxryk.cn/163ccuosucj.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163yvjncktg.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163wcfeziho.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163uceyffjj.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163mtrsfudw.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163scoiwvhx.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163fsuwmmjk.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163jrfcgrhv.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163npzoaene.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163logvrvhl.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163pdzmslzh.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163aohcszin.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163blgqikpy.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163kfnccsln.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163izgxvpmb.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163jyaideyv.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163ytxitkvs.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163pobpmzoq.html

================================================================================
来源：http://www.aibaodan.cn/163yhxupmgb.html

L. 网络请求
来源：http://www.aibaodan.cn/163hwolbgqq.html

================================================================================
来源：http://www.sxryk.cn/163eoaxlfhh.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163qpohcnzw.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163dzmktqet.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163ihqipjuv.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163dfxpwsjm.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163snkmjkte.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163swosqyiv.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163tlpwpkyo.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163ayiqmwrx.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163lrceoscn.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163pcxsxzxo.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163phhpdqva.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163qoihninj.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163qizwjqkv.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163bjjuizib.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163ieoxfbti.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163vyumqvgl.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163xfuxschi.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163mwyqqrau.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163gsobfjzo.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163hfofdbhh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163srswlouo.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163vixxvjnr.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163olurlerw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163ekwpbgab.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163mxphisbb.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163dmpypeao.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163vsvaegzs.html

[L04] 设置超时
来源：http://www.sxryk.cn/163cmjsxoow.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163lfdxmdho.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163yvfdputb.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163xpzdfmcb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163eqmzpckz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163pzwzrzey.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163ssnupvlx.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163pnevwjkc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163ypiwzyxd.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163ajskqjyq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163klamfkll.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163dkzrefay.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163mvvdyexn.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163eatmnuxy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163sgbuzqcc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163fyvmgkbf.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163anhosmra.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163iokvqyks.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163nwaopzvn.html

Py:   resp.json()
来源：http://www.sxryk.cn/163duwbqerv.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163dwreasgh.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163tikletpc.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163hmcuzygv.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163opytwlop.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163awfwcgll.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163sgrgxjhf.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163vesxqpwp.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163gkpndwrg.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163xegvkpit.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163ylqqthmx.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163oecxbnvd.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163qiqhosrm.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ssygkmxo.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163ozyafbok.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163lhgoftea.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163ayzyhhgg.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163imtvmjzl.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163uzcpisws.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163uiktolya.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163npyhqibf.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163bxlyyjsz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163phtjhyjo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163pnxthlrt.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163exximobg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163mkcqwlau.html

================================================================================
来源：http://www.sxryk.cn/163uxxjvxyi.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163yupyncyx.html

================================================================================
来源：http://www.xuanzx.com/163berejwlc.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163enwjjslv.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163kdibphvo.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163uweoviqi.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163eenggudu.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163jcyqdgzh.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163kbsyknym.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163hsttqiqg.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163vdxbeahe.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163aqgtgxlo.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163mesufgis.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163rjqknzzr.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163yizzzcck.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ikrzyusq.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163xbgprerq.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163kvbchbyr.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163xwcniozi.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163zdyvfkqz.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163fclpcdvl.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163hxokfbak.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163hoyhuqjq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163egktgycf.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163gbeqmmco.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163dcsochrx.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163xcfuybcj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163xzdpkbnt.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163ggqaubih.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163fqgaqbzo.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163gyuhlede.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163gphcpibw.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163etolsifr.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163qfubxclo.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163vvnhbzhw.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163yzuimbkw.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163nqqetqpp.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163hezmzxms.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163fvxhwoox.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163dbetfoii.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163fzcohzrp.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163afiqdhhp.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163avsdmtmm.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163yzsegiqn.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163pldfefsc.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163hthdvqar.html

Ruby: exit 1
来源：http://www.xuanzx.com/163beydxbkr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163hbbbbywj.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163wuhlradu.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163uvaeeyql.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163jytmbpsb.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163qngrhkcf.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163rsgfhjgm.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163hkvnbmut.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163cblimlha.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163mhfxuhki.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163zxolqpln.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163fbmvihfv.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163xqigtgrp.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163gsuhocre.html

JS:   require.main === module
来源：http://www.xuanzx.com/163qsbwzlko.html

TS:   require.main === module
来源：http://www.sxryk.cn/163ixmihiim.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163wdmjmwfh.html

Go:   func main()
来源：http://www.xuanzx.com/163cvyqrfle.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163tnczarpe.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163pbcaaalo.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163czwcfaor.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163obwclwdi.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163nqmtitgh.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163tndftvue.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163swjsbpnh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163bulqpfrz.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163svyqtubc.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163ybxsceav.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163xnnplzye.html

================================================================================
来源：http://www.xuanzx.com/163iosvnidk.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163cqggdxgt.html

================================================================================
来源：http://www.xuanzx.com/163qrvxczfx.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163mgjdcvdk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163umnxluey.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163fvneybnf.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163efvsndwq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163lckokfmr.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163mpbqzyfg.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163eqmzhnyj.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163hjdkabam.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163zjavrsbm.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163qbngtidn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163dthotkip.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163iogsptsa.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163lbqpaepa.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163czbfffzw.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163uxtskrvl.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163srsiyony.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163gnurgygp.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163dylzclhp.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163bzawhdvn.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163qvsuoodj.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163pmalkpva.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163gcwazcjg.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163uaivjjwe.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163wpbetsgt.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163vbvmsudt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163ildjmsie.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163slvpguob.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163jaehgchm.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163vvidxtyd.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ohpootdu.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ssnpowsr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163lpoustcz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163sltnhafv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163jgcaxrgx.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163qigdyafv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163ajlwvgca.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163thczmfou.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163jqbslflg.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163tbzpkbah.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163polyysin.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163teilcygn.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163smiehqcc.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163qeytmusc.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163cvjammrx.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163oqnuahun.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163tgzaijkg.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163lbwzyimv.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163wheudgpf.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mcvgkifz.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163qsemgdsk.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163sxmzlyzu.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163asvsoeen.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163piibcvjy.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163mgkentxt.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163jjexvgzm.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163imdxcqge.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163nnfbczyu.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163mcwxxxhk.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163uqamnfql.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163ipndvytz.html


<!-- 参考信息 -->