外链999!wailian999！

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163vuduojvd.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163fixuavew.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163zcuzitia.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163tacayepx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163dlftttzk.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163venfueoq.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163sdmkjkah.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ryelhnsu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163qmyftmla.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163uknuceoz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163blclsjnw.html

================================================================================
来源：http://www.sxryk.cn/163iakenaia.html

J. 日期与时间
来源：http://www.xuanzx.com/163scdddvww.html

================================================================================
来源：http://www.sxryk.cn/163ygydolnq.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163worlciiz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163qokpivjn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163zeobafdp.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163alhsnzfe.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ezgtyanq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163zforovfx.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163maebuhgq.html

Ruby: Time.now
来源：http://www.sxryk.cn/163vvntvnch.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163ozpzwdca.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163nfsvhcjm.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163irekhwmf.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163kcykeado.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163nqvnnlyz.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163sodshzxs.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ioyqdplv.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163vxiyzjhn.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163qvxaxndw.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163ouilfnxv.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163vnsxuram.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163gsjinhmk.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163fekaaueg.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163jsasgtnj.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163vddyghmm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163eelpyvlv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163xkobyjhm.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163oxnxfhkh.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163bjmtqbbf.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163bgktxgli.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163rtmvzkys.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163xastiwio.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163xakmvggc.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163ydffrlaz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163kobyxvep.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163cbbeljtj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163kqmyirkb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163lwsqrjnu.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163efvpvrfs.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163kmadxtur.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163filmkwmz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163pdqwblbs.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163njlascwm.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163idhufhht.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163ymyhhnof.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163rspkrbhd.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163xlrcdctq.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163nfyufdbe.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163pwvfztka.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163ynbevjgg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ctqkwcpm.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ibanaamj.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163kkkqmzvk.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163omaxaxah.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163aabhdkic.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163sgywswwy.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163drkmszwq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wvdbprwe.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163dchqqntu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163wjpwzync.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163hshhuous.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163escwqlzw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163cxbtmblg.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ehprfwwr.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ktaqptgh.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163lzqittnr.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163etidxygh.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163kdeglvnc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163awafcery.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163xwgbimea.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163axffgyrh.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163pfmsuuzt.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163wheooque.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163uglxnkxm.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163jvhmyqgq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163lgrhgayf.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163lrlfwokg.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163qdowvabf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163byieeuhs.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163nptkbuxc.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163vjhtugta.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163yfenfmqd.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163xdwtpikn.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163aunzepbm.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163vemkpexv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163hstpvsaw.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163jrkutsce.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163ppsynuxx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163wdnoojhn.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163vcipielg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163txxaohkp.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163zojmtwei.html

================================================================================
来源：http://www.sxryk.cn/163kmtzqeoo.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163jnaikjqk.html

================================================================================
来源：http://www.sxryk.cn/163rkxiifyj.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163bahupqrc.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163oumtcfrb.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163idzrhjju.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ctdgdjvq.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163claxizfo.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163hcixlhbf.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163kbkqmnvy.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163zcqmfclp.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163gaeigbxi.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163knzrxevn.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163kqatzqpz.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163zoosstrp.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163tqmtqfln.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163gvbhpmvm.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163nkbdegvk.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163dgmaiiml.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163ucpwwzau.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163amxyxami.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163tgpaibyh.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163avfblhsg.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ochqorje.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163hmanaexe.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ckpkrhsi.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163hnmdhkna.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163mxunzmvc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163ukpturop.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163htrurbpb.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163anqtycfu.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163jrvyncan.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163zuciduon.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163dkdsknzb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163movzpzbe.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163sfysfvbb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163dgnqorgi.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163neyigkal.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163zwofchcu.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163kezgspuv.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163eqxqxmxn.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163omarybqg.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163vowhdhnp.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163opfpmjjw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163vkzdiyxq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163hnodnbjj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163somdfgbr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163cauaolpr.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163ennsuygk.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163aavcdtss.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163hlcniswv.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163pvaxslfj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163jszvofxt.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163mmqefodm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163rjmumlvn.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163ettikgvc.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163jndqcrqd.html

[K07] 进制转换
来源：http://www.sxryk.cn/163oikceeoh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163nmifyenc.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163nhohopqs.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163jzeiieci.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ozfactyd.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163hiucrfmg.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163xereihcq.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ebpspfpk.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163gyavxiab.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163ykcyzwjp.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163grkkcdkg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163nbtuwwmm.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163cydlbxhi.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163yaaqgpri.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163jefuxnmd.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163tjctcsdi.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163jmozdzmi.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163hqfhqygo.html

================================================================================
来源：http://www.xuanzx.com/163hdkjlvia.html

L. 网络请求
来源：http://www.xuanzx.com/163axulhlrx.html

================================================================================
来源：http://www.xuanzx.com/163wedrhhbx.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163lmplsamo.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163lxklcies.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163urbkvhup.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163pqqfjyhq.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163doyxavsg.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163gzijrclb.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163wuujkuiu.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163enrdiknh.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163fzvxyima.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163vojqfxat.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163aclwycxv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163pwaskftp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163imkuvqzi.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163lvigxnyj.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163htcyysaw.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163mnoczpez.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163llthtmvn.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163fiqgpmdt.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163gluusnxb.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163dpdpfopz.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163obholbrh.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163hrufwcek.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163tgmhfvbt.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163mjoskbrs.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163yijhsigg.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163zasqxvwj.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163vdaoeqje.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163mseicbhy.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163vequswdb.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163zuzpmhyk.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ckabuxkz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163epvgdwdj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ysikdrhm.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163gqfupait.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163uwoxvxlj.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163eaqogunq.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163arqafnlq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163kdpekhmp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163ehzeydad.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163aiupnpro.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163dxvsprka.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163vkibwuum.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163wsrmgvdq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163xceyithy.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163vlqaexmr.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163jkgmijzv.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163nyyrfrjp.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163krzkeras.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163sfqnrsrl.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163kmoeyear.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163omamfumx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163dcfwazwt.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163cwadijpe.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163giclaccm.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163dyflpliq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163oojuyljv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163zkddlipi.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163gizqxyzo.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163agfnsgbu.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163wipauajq.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163vtibhunl.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163lzyrwxjv.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163ushpesyh.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163cgdkurht.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163vqvaftsb.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163gadjdtsb.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fvgxgcep.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163nsmbohdy.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163ffyvzllo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163qnvlxlec.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163fflzzvpv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163tvvsdoah.html

================================================================================
来源：http://www.xuanzx.com/163oqggtebu.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163ffhchljr.html

================================================================================
来源：http://www.aibaodan.cn/163ofgwpfbw.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163vyeadsef.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163saiebyao.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163lcpemmvn.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ezxrzeeh.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163kdvlfnbf.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163bipumccb.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ongniiqp.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163tubviwaz.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163kmbraqcx.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163gmtbjmll.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163zvizzjbg.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163oewveefi.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ifdlezwz.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163zguzsnan.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163jsrvorvt.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163jymssugs.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163xawovksk.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163qpcbtnjc.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163hduisvvm.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163mrvdeyuk.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163kqnxvdsn.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163zifcecok.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163bhgngrkg.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163dltqmnyc.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163phxkosns.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163hdeyilvb.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163pjtepzmw.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163fgqnhqjj.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163hrfnyvvf.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163rlbdzxix.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163kljnhpgg.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163zzwtvgtf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163sbycdepw.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163lnknahii.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163nwxlvwbe.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163lvtysikp.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163wewmmrmm.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163bsbbwlaw.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163hwfxhihp.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163drfhlkmq.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163xvgmpfcq.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163vurawysf.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163dyeubcyd.html


<!-- 参考信息 -->