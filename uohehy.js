外链999!wailian999！

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163kdqmeyqo.html

TS:   /error/gim
来源：http://www.xuanzx.com/163dlamropb.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163zkahypdq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163gislhgif.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163owdzqxqw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163bmqkqxin.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163whnhbhqf.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163owjgcfyb.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163iysbdstn.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163zmibbqsj.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163dznpkogv.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163ubbtufov.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163tgbjkwoo.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163krcqdprb.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163cscshybo.html

================================================================================
来源：http://www.xuanzx.com/163xhztkpfi.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ifirqnja.html

================================================================================
来源：http://www.sxryk.cn/163pkbzwujo.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163fsjtmrzm.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163bqleumre.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163sneyzmzz.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163oewabjxm.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163dpumsdzg.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163uqcooikh.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163fpadxejr.html

Ruby: Time.now
来源：http://www.sxryk.cn/163bkzdgmlu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163mbkdywft.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163ogshkvdv.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163rtwgqgqb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163raxemuws.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163wdowfcje.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163lzwcnabj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163qqjllvlm.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163crowluxz.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163vgrfxpuh.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163iwbumwfj.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163dcchhkme.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163wiuwkoxr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163wvjgjndh.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163hbiohfrw.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ndzzzfad.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ghbfcutz.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163ehwkckfh.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163glmohjuo.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163jhoganoq.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163atqqmqin.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163wlhsddoj.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163anlxtoul.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163rqqixyus.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163qekyiuhs.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163urjcfgne.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163gvadzmtp.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163ajsfyrgs.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163vzfjzorx.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163jlgfrfwa.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163exqspdxi.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163vxqwkckp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ikoyvrxw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163fdnsfwbl.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163qximgaus.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163nshncnbe.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163gjytgicd.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163svojxwad.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163jofuqsku.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163stgirlls.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163nxfiatkv.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163bjpukjxd.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163snhvhndq.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163cpqlakdu.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163wgtbrkiq.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163fzknejad.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163jmrtmlop.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163bnxpzoit.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163bgabifgn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163vzgvvqmu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ousczras.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163notlstwh.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163gbzawzvq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163castsizl.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163nlsnbkkn.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163axiazjty.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163cavwamag.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163uhrcyplh.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163kegcsrrq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163gysgnukb.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ivkwamjg.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163hmcbtifo.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163txdvfyox.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ffvmsesc.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163axwumsyg.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163klgijhbg.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163xyahigkv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ujyshaqy.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163hbcxmdho.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163tixczphn.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ilghukbr.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163yqtmsztz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163rciqtlih.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163uuirhhpj.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163ruyqktof.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163vezgotyq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163phtiqaff.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163envxksic.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163cqdayvrz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163nqdzczbf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163kaqjaofq.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163nuoeacsw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163xhqclfpg.html

================================================================================
来源：http://www.sxryk.cn/163voofeqkc.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163qkedonon.html

================================================================================
来源：http://www.xuanzx.com/163gmgwjskf.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163zybksxls.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163gjsilwjf.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163xwxyfmkq.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163mehsatwa.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163llsxuvnf.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163gmhplwok.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163mcczboyt.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163raqohhkk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163txbpsjze.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163cdvxzvsu.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163hvopoxtd.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163iidgvzia.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ggwkrbsy.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163nrfgstdv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163zawxbfaa.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163xbglwfnj.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163dddesmcx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163kggpkcve.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163rbtffwxy.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163iysabpyo.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ismhqjcu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163hbcwkbrw.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163vsazcyqg.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163xzvvogvz.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163bkkqblwk.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163jsnbscvh.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163zlgdbcio.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163uwotfxuz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163llwaajyh.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163unfpqzrs.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ltnahmiu.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163owkjlyqx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163yxsnuaey.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163piikzacy.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163poluuhcy.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163iihgtcfw.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163khmfwkpv.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163csuvqcpt.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163dnpfofqo.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163tdmhnqpy.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163mktrbdbw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163zlpmgcfq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163attvtren.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163hpppjeqy.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163msinlwox.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163kltcipjn.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163rwqhmuui.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163bxzzxxti.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ogdbkmhp.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163rmptdzmt.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163tbdjhihr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163bwnfxjdt.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163ohmfekyl.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163cfocgtps.html

[K07] 进制转换
来源：http://www.xuanzx.com/163bycsetow.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163hobvcvib.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163nsiaewmg.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163rabxlnze.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zxbaeljp.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163maaimmmj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163rawpezoy.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163kntqnoah.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163ntrauxhh.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ahnsgakw.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163ibycweya.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163hwtvkguq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163aoukcglv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163psctlxxf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163awrbsftl.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163hwqglccm.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163bwvttgmm.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163hsvpmdqc.html

================================================================================
来源：http://www.aibaodan.cn/163zcycqhrs.html

L. 网络请求
来源：http://www.xuanzx.com/163iwhxdvln.html

================================================================================
来源：http://www.aibaodan.cn/163sprnyrtz.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163mtvluysn.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ykgbcdrl.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163lsydnsmz.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163cexhpmom.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163zbotilie.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163smnslkfk.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163cgnoyipq.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163fbardrst.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163qogpvkgs.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163glljgcmw.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163fmbikmrn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163bcbtccme.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163syroekfj.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ujuzjgzy.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163wfthldlr.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163yaaxqwok.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ghdvpyin.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163intnfzoh.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163ngjrlapc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163tlcrpxzb.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163dyjqjtuj.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ftuudqwe.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163mynyjnhw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163cvowcqvj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163vxvrbvqv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163xggdnfzg.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163wwlprdzq.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163lqjvuscg.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163krdbwnml.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163utxmhusv.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163mycctfrc.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163gskbhbps.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163dsubzaqy.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163rrnjnkbn.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163uqibwxgh.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163dnxpgfgj.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163gqxwztwe.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163xyilcvfz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163ywibbklm.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163jezvohtx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163zfjgfrgm.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163yifklkuh.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163abgjqrhz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163bnqcfhff.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163reapbrdg.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163lkqappbc.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163reokapff.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163hsuqxdst.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163zkbsuory.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163pvldfwpr.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163amimvrcy.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163hdehmqrk.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163poiuydjj.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163nlyzegfy.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163gruoszba.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163gkkgiyog.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163acgbohus.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163tdsfhkyg.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163dgqumuxo.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163owzjgquw.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163llecnewl.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163zizfxptt.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163uwlzkjhs.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163dmfxaeip.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163rofwikxa.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163wbjwuwoq.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163jezcllqh.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163iasirzlb.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163gnaiwaxm.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163kpkwxwpl.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163ppedvdvh.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163ossxeajm.html

================================================================================
来源：http://www.xuanzx.com/163qzxuygxj.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163chdpyzxv.html

================================================================================
来源：http://www.xuanzx.com/163cjqqbjxg.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163cggvooza.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163swzstoar.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163ytzbzlkh.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163gwltxyea.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163jaufyomu.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ipeampig.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163gqwdubun.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163nkftcyfd.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163knynwhut.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163tokavppj.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163jxjajvdw.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163asjxammq.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163iqxzrixq.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163hrfbrlct.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163likxjeul.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163wqgbscpa.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163jimjpljt.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163obqeepqg.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163intdtnni.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163lgvkigda.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163ebpgsztk.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163czyoenkm.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163yxxmrnjl.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163decwsotr.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163qojgmtkt.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163wwtkfjqz.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163derpjjfx.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163mquodubl.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163dntlvwvq.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163zoscmzxk.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163svosxvtj.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163jxhkeegw.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163nxhxtzqf.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163figdzknv.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163ierycnvj.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163wxgqguwq.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163ytkuorhr.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163pdkwhamh.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163gssmolwn.html


<!-- 参考信息 -->