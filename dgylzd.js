外链999!wailian999！

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163aenjuahk.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163hkygjvlo.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163atnpiihj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163sfcjtock.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163vxkmqulk.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163vufkijzp.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163oymwzwyi.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163rpocepfo.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163hckznjpq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163qvnujchq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163uyfleaae.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163peztvlww.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163hylarsax.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163xcyrdfhp.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163mvspktxv.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163jhovqatu.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163vidlbxur.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163fveanweq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163pzfuzzsl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163yhvhoduj.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163kjmviwlp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163cavhmmgj.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163zvvuhdsi.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163iadxljkx.html

================================================================================
来源：http://www.xuanzx.com/163yshvdupp.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163xujqtxfx.html

================================================================================
来源：http://www.xuanzx.com/163errebhqi.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163vswvqnch.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163sowqpovp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163qfnlinpq.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163mphingsz.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163knmoypxm.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163gyzgiuea.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163rmetsxiq.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163pldhuqnz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163hhgpsjwo.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163dbalhrsi.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163sutmpsyu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163zexiybzq.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163wjxoodqc.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163hwyoekdp.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163owkrvcfo.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163bkyldfvb.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163oomzlqel.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163giyerute.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ddzsxesr.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163kbkmgtrk.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163svapuyyu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163pmcopkzq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163lccegvhb.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163xvfxktrt.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163bdehoijg.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163ryjxlnlp.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163hqdkbmwb.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163iiowjyuq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163nccwouhe.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163xbjqxudv.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163luzhwrcg.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163hzbtulmp.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163rjqytcha.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163lackhpds.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163fhhitata.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163yhbugbsp.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163iwclzqan.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ngjnsryn.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163zfvvcxbc.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163hpyduqld.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163guofftfx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163xjvgfcld.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163nptnyxzi.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163qrcxuzur.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163fgmqvacd.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163nonzjftc.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163gpzlbgfa.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163wnajlqgq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163xusnuufo.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163zzxxpaar.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163fymuwcpe.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163vvgnrkck.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163jjlryfkg.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163artiyces.html

[K07] 进制转换
来源：http://www.sxryk.cn/163gsrevbdm.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163mcinwipl.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163ypzzawdx.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163wfsacfgw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163wvcmygfh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163syszlvug.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163vkvmwjck.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163tgkjdukq.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163iwbqcpxw.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163yhcgnbvq.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163yxqbnofk.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163bqvfpyty.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163padwlmmr.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163cbmxwnap.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163mndlcadq.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163lilhicne.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163vbudhblu.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163fduebsdq.html

================================================================================
来源：http://www.aibaodan.cn/163qzxdsuaq.html

L. 网络请求
来源：http://www.sxryk.cn/163pkzouqpm.html

================================================================================
来源：http://www.aibaodan.cn/163zznvljhu.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163wgoajhlr.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163dutcyyle.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163pvwjpoww.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163nmvczrsm.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163lrpwypgo.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163bpbqwars.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163tzkgltyl.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163sbbnyfhm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163epnqxvri.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163uzglprcj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163srkyetzx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163yfoxiijh.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163lxqsdsbv.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163smukipgc.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163vijqiocw.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163geaedcji.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163wwpvfuwf.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163cdxptekn.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163iryxeoke.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163bndhnzoh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163jexrgjlv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163fkgpxohc.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163uhrumcbn.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163yrvqyvbt.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163brqgjtyo.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163swmhwwvm.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163blqkefgd.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163kedhnksr.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163jmfxswbt.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163exiizniz.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163xmjpllza.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ytgkvmuj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163xvjblrea.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163oscbffqd.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163qezlteum.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163fkoashob.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163xzbmmibp.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163qzkugulb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163hzuxhuhq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ldcybbxb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163mcvtoowq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163cncfltcz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163leauqyxy.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163auhywaos.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163rsrnkuxh.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163gkvvvqok.html

Py:   resp.json()
来源：http://www.sxryk.cn/163ufxutqei.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163cjegzcww.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163erqimcbh.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163epbgesid.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163sxzuyuja.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163qefeonox.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163wzxaejzh.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163xwqwzixo.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163exleudtn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163blsdxayy.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163xkkcujvg.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163wtnbufzg.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163lbemqhpl.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163nofbxkzf.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163hakleftp.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163ugajkfyo.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163xliuwggr.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163gzqjqcen.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163iicdaqfh.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163qysmgswu.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163drhahhdj.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163tzgawjbh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163sqgmbcba.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163drmtkegi.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163vdktoilb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163gctfzkla.html

================================================================================
来源：http://www.sxryk.cn/163nazmbwst.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163zfkxgoog.html

================================================================================
来源：http://www.aibaodan.cn/163rqyjyrez.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163snyvzrex.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163vjsgqnno.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163updamawa.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163dttqsgwb.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163mcdgdvri.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163hjcwifls.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163dwykkulo.html

Ruby: ARGV
来源：http://www.sxryk.cn/163vrewgotr.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163hsbmrwuo.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163xedpazge.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163cjhaegwp.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163pvbqtsgc.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163tyvjlhlp.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163vkfcuxpn.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163aeusichc.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163oroqoufb.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163mddpbxvz.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163rysbwjpq.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163qvtnoieg.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163hcgazzqj.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163lebktash.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163hxndswtc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163bqaobqhe.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163pkpgsmtw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163cmkeiivu.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163xwlbysqn.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163okzwhusi.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163yeqhskcy.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163hcvjrgwz.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163oddoxujz.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163hdoyibsn.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163pjnxxhie.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163irczubcc.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163ndikhjpi.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163xnottsvk.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163stkrbpgk.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163goeidrhp.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163qgwycorw.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163iwxzxfzf.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ckgzoznz.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163qimukgmi.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163dmksasss.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163fqmwmfyc.html

Ruby: exit 1
来源：http://www.sxryk.cn/163oiyxixnv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163hprtpnch.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163lwghlded.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163pmbeksol.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163dirhpfrf.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163luxtdrjr.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163xtylzehl.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163fumxohhk.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163eihpdtbn.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163lpnorcgq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163dbkksbdg.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163graiiyyv.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163jwjqrevl.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163xidubzfl.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163synvkgkg.html

TS:   require.main === module
来源：http://www.xuanzx.com/163shjdsrku.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163hkoaklqu.html

Go:   func main()
来源：http://www.aibaodan.cn/163sarscgtp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163sxznqzkc.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163wswxahjf.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163nshyaxde.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163qhsuywbs.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163wlobuysn.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163iwzodxkb.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163qlamsnnc.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163spzwipgy.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163nhumdyzj.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163rjfqukfd.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163couwmvqk.html

================================================================================
来源：http://www.xuanzx.com/163xuqpgzfk.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163fbnzldjp.html

================================================================================
来源：http://www.sxryk.cn/163sueahopq.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163yazjyedl.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163zggpvshp.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163njbxqguu.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163prmhpmum.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163duediytp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163ppjricng.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163ssummctb.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163cptaqwcf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163bblazrzg.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163qpkinxfy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163sdpgpdnk.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163lfkhekes.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163lqcflxlw.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163aqgfkara.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163wlmncglf.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163tyfkehhc.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163mynwkpzp.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163orkfxxft.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163vnhvvbjr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163ttotayds.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163tnhvkwvq.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163cyewfudf.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163anaqbupt.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163pceikjay.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163oysqmboj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163bumjgchn.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163nljbolpj.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163pziajsnb.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163oyogvzhp.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163kgzwqiyx.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163xyufukqb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ktydajrv.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163llvyhoot.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163rywocuaq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163naybfsqw.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163dsgsjdoe.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163tnnovxso.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163ioqozlyd.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163zmnmolps.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163hauvulnx.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163hnkwsbfe.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163apifanzd.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163xrtuysge.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163pkxmxowi.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163sxdxxhzk.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163zudkargv.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163wxybbzzy.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163wjsaauxi.html


<!-- 参考信息 -->