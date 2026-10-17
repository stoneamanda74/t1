外链999!wailian999！

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163azmtmsmu.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163kjlcvxhm.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163scrnuouk.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163tdngwitk.html

Go:   time.Now()
来源：http://www.xuanzx.com/163wuzbdkub.html

Ruby: Time.now
来源：http://www.sxryk.cn/163pwerwbkh.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163addsvwew.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163iccfqjgu.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163snqnruzp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163zlwqoavz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163dftllvbh.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163qcoefmlp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163axlwpwxt.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163tqhwkcdr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163sypeaomn.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ypcpwlnr.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163guleljpd.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163pbecdbsd.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163otusmehu.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163yxlakkgt.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163gpqzqlje.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163eameakrs.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163hjeljdjh.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163hdbkcblx.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163hodgjpji.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163piwkxbpc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163ujqjzkyu.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163tdsjotdv.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163bovfitux.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163lgnssaeu.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163ckqvnrsj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163hbnojtcy.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163kzjdvoyd.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163zmqjdzbz.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163nwnrywye.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163fzcduoiz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163awhmooij.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163fkbrcsdq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163cewoncpx.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163ebcaxbtc.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163uggttgrz.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163wbasrpxh.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163hjfmorkn.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163hetxwmgq.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163mnfwzzym.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163ugwlcbrp.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163dyytsgtg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163uynzprrt.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163tvwiencx.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163caiwxwgf.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163zatstate.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163cafstyjt.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163getyfilm.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ovwrjdco.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ebhmdfph.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163gitngqsf.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163sydstqcn.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163qixzelie.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163ykcikieh.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zrfeyrwa.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ujyuzyiu.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163mdhfmfyv.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163azpklezv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163dazsjpbh.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163yznnnnbb.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163spgzfrxm.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163sdplchbb.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163tmrpgost.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163kuvmpbhp.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163zmzhormz.html

[J09] 时区处理
来源：http://www.sxryk.cn/163ajnfnwas.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163rpgtxgga.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163mhyprtlu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163tpgbghzy.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163uirltbeh.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163tivtccwn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163kcrpnpei.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163rsqgxkui.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163keudlbmv.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163bvutmgax.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163zpfsgqkl.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163zqwwdztl.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163lvgmuyib.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163vylnodeu.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163tnmkcrgf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163sknkiafy.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163imqpoauz.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163jblonluv.html

================================================================================
来源：http://www.aibaodan.cn/163bldmusld.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163cqiyhpaw.html

================================================================================
来源：http://www.sxryk.cn/163lfuqslyk.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163zxsjstkq.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163sjifpuuw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163syfiglla.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163igopvljp.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ycrgzpel.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163txrxwoym.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163pguwfaih.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163kojfnrkj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163oeenpgan.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163jtyfepqn.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163zioamjvu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163zazeuuhj.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163uwwdqijh.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163trrsnvxw.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163tvipimie.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163djvcfply.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163tndqlpes.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163fpvwhiqm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163pctjhrgn.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163kcrocqqj.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163jybrigmo.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163viycfxaz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163xdeaaaok.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163dvbwvipj.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163qxwauvbx.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163gwtthokt.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163yhafhvnd.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163fxgosuqs.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163hxuzxkgn.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163zajzhyvn.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163kecmomht.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163swxyfahe.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163xelnsvte.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ndfootgu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163djyfooxl.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163pejebycq.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163tusrywub.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ehndjvln.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163jgmerxis.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163tcwrhpmp.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163nzlybwwx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163vdasnlja.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163lyvappnq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163xpwmekwp.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163gclhzdct.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163cuddafoc.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163hywparpz.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163qhmqdcch.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163oiuzfgly.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163yrxxchcm.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163vavehgzn.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163hlegihhi.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163sximkpmm.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ktxdqvnx.html

[K07] 进制转换
来源：http://www.xuanzx.com/163lvowgjpf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163ohgkcatx.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163qnqbjpjf.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163zyackhyc.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163mapnrwva.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163eyicdkio.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163puduleuq.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163glttkjic.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163sflzgqbc.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163lqvkisyo.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163smrrxmti.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163cweqeots.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163iycognbz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163xsvcpwqd.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163xcixtmeo.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163lztmbrcj.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163qckodavs.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163rllcncdg.html

================================================================================
来源：http://www.xuanzx.com/163exqaache.html

L. 网络请求
来源：http://www.aibaodan.cn/163rqzfomfy.html

================================================================================
来源：http://www.aibaodan.cn/163yoacrqdw.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163eriqwbql.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163darmuvri.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163yzvelywu.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163wotntyob.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163piskmgbj.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163megftemj.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163xhdtbelk.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163ifbuacwi.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ykesmoga.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163yyqbycdt.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163penirxlf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163nyamjutz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163zdrhnpfi.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163qooztkxd.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163fgkyljfj.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163tiqnscbb.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ucvfbdpa.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163zvetctid.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163bofumfjz.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163iveyhudr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163ctxjmngu.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163wfptrxby.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163huompogc.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163ykvhdrte.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163jtzwebzc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163kwsqchej.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163emmfpuxo.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163lmpmabig.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163plwkwgva.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163ynzqszaf.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163plkgstbj.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163rnuzxyon.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163mjtidjct.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163aqilchcc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163hjntrnbk.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163qwtaykgz.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163xhcrnrnq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163azfmvasj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163tnyooraj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163xwpnpjip.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163erzikejr.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163qnamcjck.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163epfjlfyd.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163spvdoyiw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163syeggkmf.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163oipdgdfh.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163kkamlqcd.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163nvjwlnrr.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163udqocqdm.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163raieihlp.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163gsoyjcbo.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163bzbhybfr.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163lyyenvgv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163xhmebnpk.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163vnixbhto.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163qmtzkzwy.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163fxjfapof.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163httvygis.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163paflitcu.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163mejafkfh.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163zpofnnpi.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163rnwfycba.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163ajwmutyp.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163bbrllnci.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163mpmmtmvy.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163ulsqkmwc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fptlhnek.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163wohsgido.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163jzlkxgyw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ybczrmpu.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163kgsgqbci.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163wmpxkocz.html

================================================================================
来源：http://www.aibaodan.cn/163pjfpxyru.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163byuhaekf.html

================================================================================
来源：http://www.sxryk.cn/163lzapjehl.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163sknqrzjp.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163pnwfhexv.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163zgniuzoi.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163octlpmej.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163jxdvetax.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163mqwbuyik.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163xabasolh.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163qfibmbpe.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163pdtkvmnf.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163qyfabibx.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163prfusiuv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163cfdavser.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163orcpggyz.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163pcvkwwuj.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163buwvufwg.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163xrgykozw.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163ywwoufaj.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163bbavjexl.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163iilyjijx.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163iuomtzzt.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163vcxokggl.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163wfuopraa.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163xzfhokui.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163jcccrwwh.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163jsswgijt.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163iupfsciq.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163lihnarxd.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163rllbbgsw.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163uvdqqoms.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163jysibpfq.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163wcnkrfyx.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163vfqljuok.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163khqxcyxj.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163kmkubjop.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163nkndvaee.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163hvswqftf.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ntdmizsw.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163xwpepbri.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163ockcqjgn.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163cpvthnuz.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163dnelqlrc.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163wpeefveo.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163qkaxlfvz.html

Ruby: exit 1
来源：http://www.sxryk.cn/163ybphlegd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163kulgdnuo.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163wltpsnib.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163wygrepce.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163ytxgwqrg.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163qkyppwhh.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163pirmfisc.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163nzcvexxb.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163kltgmhyx.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163ubbyueoh.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163pykxcixd.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163njxclmui.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163kjlyphwg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163ipctjusk.html

JS:   require.main === module
来源：http://www.xuanzx.com/163qprwkyks.html

TS:   require.main === module
来源：http://www.sxryk.cn/163jrrgguyk.html


<!-- 参考信息 -->