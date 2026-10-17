外链999!wailian999！

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163wevwokfd.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163hkmubeti.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163gkqfmuff.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163yjzteuir.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163coeuhhkl.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163oyaavxlj.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163jjsazwtf.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163vzsqsevk.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163cfmsusvr.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163yseldyif.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163sxkvftvm.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ntmnnxuz.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163zusadqpf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163xgugacvc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163styddvhu.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163maeteqvn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163ynbjhexn.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163nwrmddnc.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163btvtgxdg.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ndsheild.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ohlzxozj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ehjklexl.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163bwecwrid.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163xltyoszo.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163mxdzgfmk.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163bmbythdw.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163qnsmvmcb.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163rbftfyjq.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163gppsvvwp.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163orxawgzy.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163rpqruntq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163dqblwfna.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163piraxpbc.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163mqbcqdmc.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163ctyrogwh.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163hkdrinro.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163anchjyus.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163jstzlhiq.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163pegimvwv.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163xwmbvlaj.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163vyzplziv.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163pamcyxgu.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163ixlcerno.html

================================================================================
来源：http://www.xuanzx.com/163hjkbriai.html

J. 日期与时间
来源：http://www.xuanzx.com/163oetjpajk.html

================================================================================
来源：http://www.xuanzx.com/163zufpkgvb.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163mcpgpiky.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163khthqpqr.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163szozzgyh.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163zruatfos.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163rsrjxvsm.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163sdepnvwv.html

Go:   time.Now()
来源：http://www.xuanzx.com/163ljwmisbr.html

Ruby: Time.now
来源：http://www.xuanzx.com/163grjikrwy.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163cluyrnfc.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163taamhmet.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qlwnpseb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163yffofmzn.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163lanevxhv.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163hqvyvsxm.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163wfbcyqdp.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163nheywuuq.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163iekbhyap.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163tcfinqqa.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163gqcbzdoy.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163zeicdqwf.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ccmegtcv.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ihioweon.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163oiwprdhs.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163mhmazvds.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163uhtkqpoa.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163hugkrrij.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163upntqewe.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163hhnwleuq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163vpxtjxyr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163nsxmzvxo.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163eqzolqri.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163fpzednzu.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163stoiksnp.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163fpkhltat.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163uspahsiy.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163naclmkfr.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163vuhojmcf.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163yjkuticy.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163xgboedqb.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163jjbqwzhd.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163neblyubr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163jwxxynbn.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163qnkoczch.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163swqgclfu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163azvecczn.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163pllysqgq.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163cdnacxes.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163uzsucypq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163zkhgzmyu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ykkgrwyl.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163nrbpmskj.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163hunmapmi.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163mnvgxaxp.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163xyvdrqsd.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163jtqazlqy.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jilcndas.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163takiwlgu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163srpbskcv.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163jtpchhun.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163elihehxg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163bkkmclzl.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mrducnno.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163chuplmyb.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163qcwehxds.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163wbxewelm.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163mjhcayzv.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163xpjzyvuw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163yjwpscfy.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163jicxkrwy.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163tebytgzy.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163hyspkeig.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ndtrrqxa.html

[J09] 时区处理
来源：http://www.xuanzx.com/163zqkdalrq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163afdnmaoc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163xyreypzs.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163apiaspsx.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163oacoeqlj.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163zackxydh.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163zjdsfvpc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163zmwpdoha.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163zgmwizuw.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163uveocjai.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163aeavjirh.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163getoyuju.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163yazkxcar.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163bfaxaxhr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163irhqkhxn.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163xkfmtnrt.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163iaztksvf.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163qdoktuxf.html

================================================================================
来源：http://www.aibaodan.cn/163hhquxvlu.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163qhhuoeku.html

================================================================================
来源：http://www.sxryk.cn/163jrpzjqdn.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ldpsnatv.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163zkcaujdi.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163gxxucuiy.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163sgokraih.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163nidjqqck.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163amdbuuyh.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163tewtentg.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ngjqmwgn.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163gcxfrbbn.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163mvqzglqf.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ndgkkxww.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163ehqymthc.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163hvpufnqh.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ovgoiflz.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163hwfbtiki.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163yqtvjnon.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163gryodqlh.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163zpnwrivh.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163fikevxvh.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163bbpehcmj.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163jjnyntck.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163iorrcegb.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ftepwbsu.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163urbevqqm.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163nqcunazu.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163zdbtaogu.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163elxahyto.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163egekzdux.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163hzludupb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163xsyhbala.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163hhumxmpg.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163eltrrqcq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163sopfchjx.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163lhryrope.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163sipuyrzh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163rxpmpxsn.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163qrpecjoo.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163gxykqogt.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163lxmbtesc.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163hcacoiau.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163pvsvugsc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163nbdkjjco.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163dfevkkdb.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ptsnnkwi.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163gkqvoezn.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163cmkvljiz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163ymmwlwpa.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163tlhktkkb.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163gmoxcbvg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163sytbqnkm.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163nvjkerom.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163wjgqfdnf.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163ohdytgpr.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163bfzwvbii.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163vfxlayqt.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163bhavnbfr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163vlrlinue.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ufpqrrxf.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163prgxmuqd.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163jsldkvcy.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163peoriqah.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163rztqiicg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163wdpzvjuw.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163qmazmyef.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163fzztnpen.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163gnkigugp.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163nbgluglv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163gfusgtuc.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163nbgnztpi.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163pxejshvu.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163ufgwynza.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163qotsmmhj.html

================================================================================
来源：http://www.sxryk.cn/163ffurjzqw.html

L. 网络请求
来源：http://www.sxryk.cn/163prglukqy.html

================================================================================
来源：http://www.xuanzx.com/163doutpyql.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163uxeikhry.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163pmfnabam.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163uyhmgepi.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163pmnttddh.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163wkqqevpz.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163oypvmtkp.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163cucdlyty.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163arvcqvdl.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163isnbfwfx.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ivsfpcur.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163tsbwwjqb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163vmcsunnv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163kqciinrz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163kgsggrgv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163uozkdwkm.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163utfhhhyg.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163izjaofob.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163lnxdbulk.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163phoornmo.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163yemhctqe.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163hnfvtikw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163btyjbvmh.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163dzmvezvy.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163uzmuencl.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163dowkevyc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163kkpqsnwf.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163fwrfpuge.html

[L04] 设置超时
来源：http://www.sxryk.cn/163jkebbelv.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163gvxrncfb.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163erynipqk.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163kxqgzsne.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163dvvvkgyn.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163hhsfmacr.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163utiwwxug.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163ryfjuvtp.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163vzlkwdyj.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163doxdtnog.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163fwfqfydn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163wdnurlom.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163bgewcgwx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163owatkswc.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163jddzbqky.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163iebtoquy.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ymemvsdw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163iqnpkuga.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163nfvnhoka.html

Py:   resp.json()
来源：http://www.sxryk.cn/163qijujhlu.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163rfcbgjpg.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163gkwxibrc.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163atlgmgft.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163vzwraykm.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163puidcmfa.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163dcannspo.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163hyetnxpv.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163tmzspfng.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163gupwkesq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163fwosilic.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163dzmhhydu.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163hqudmfas.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163byoiyehi.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163iajicnik.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163qefozuad.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163itfptnjk.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163vykmoilv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163faojbjgt.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163pxetcipy.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163wjdnqljy.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163hunsfjlm.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163rvjgxyem.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163ddwlaxsf.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163splkyefw.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163cyiqqmxd.html

================================================================================
来源：http://www.xuanzx.com/163bkbzreok.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163hqlutaqn.html

================================================================================
来源：http://www.sxryk.cn/163oeymobuh.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163zfcdgfrb.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163vrmywwnu.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163ipphwval.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163szvgbhxz.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163njmspvzd.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163xzzrptjx.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163nymhdwmx.html

Ruby: ARGV
来源：http://www.xuanzx.com/163siezoopp.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163zlfoxnyx.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163muefedjp.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163hnxqlehx.html


<!-- 参考信息 -->