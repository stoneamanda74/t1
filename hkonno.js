外链999!wailian999！

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163cjqoauva.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163eyfwszfu.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163uyunzfrn.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163qfqrsqwj.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163vnczgorq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163vfsergqz.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ecgbanas.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163hpjxsmuk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163mpjyvzuy.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163dcxazcnp.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163maidgbce.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163fpzkzimz.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163aqsjoaid.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163nciezahs.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163rrjtfgxm.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163lntkmqpn.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163fmemyhwo.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163lmtrafet.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jprmaixa.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163vbzngvmx.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163joipptzp.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163yysrnsby.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163juudxqpj.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163aruofnwe.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163uyefdigk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163dfktizsr.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163masnnjor.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163wkkthptm.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163trliaqqs.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163wgshnpoe.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163jmxpfqvp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163vjkartfv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163otgxyqkm.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163gayumphx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163bdbdracs.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163iliepyzv.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163isyecgiu.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163wfaqbygf.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163kgvjxvqr.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163sehfxmst.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163bvpiqjad.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163asxzgoyv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163fwrvufac.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163yzpkoqwj.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ueqwikeq.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163bijoefgw.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163bzhifvpr.html

================================================================================
来源：http://www.sxryk.cn/163nyflbxmd.html

J. 日期与时间
来源：http://www.aibaodan.cn/163dxtlyheq.html

================================================================================
来源：http://www.aibaodan.cn/163mpwvdnps.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163zzmwwfrx.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163kbgpiapv.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ckuqudcd.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163aguvdpqg.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163tjixngos.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163bxzeaakf.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163mbxoekiy.html

Ruby: Time.now
来源：http://www.sxryk.cn/163vimgpwta.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163wysupkmd.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163fmtkrnqf.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163phugslda.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163sgjavppg.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163bypcjnif.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163qqivjrnb.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163wkoqface.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163vqmnwnji.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163wwsonhgu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163vsihnajb.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163pqkyurrp.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163vptxxqhr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163dsrggnfx.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163teyvmzns.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163rsapynwy.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163dtutteok.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163abapmgir.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163oseyafbc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163rmmbasez.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163hnapivka.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163cliwhsjd.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163riwpqmdy.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163xtavfqmy.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163vmpmrvze.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163hxhsiqwo.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163yzrsddqt.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163buowhqea.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163hzpbhzkd.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163wuoivdyu.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163frieuzdq.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163lezwdddi.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163oilwpxfa.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163bznskuss.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163nibwygel.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163rjdqvgkv.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163trhrghob.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163dtohdhlj.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163getifefk.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163lfzodxkw.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163sraeoean.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163ggmythhq.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163qlqztaps.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163gcfiuiss.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163iadzdysn.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163fcdsgxyu.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163xpuhxnei.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163mbdipwjo.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rebzjjlg.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163vjntcwht.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163madcgdey.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163zfzgcexx.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163qoroojzg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163fywbfhkr.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ezgycfad.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163taatczeu.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163giqraakq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163cbftapca.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163nundaqsl.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163xqzuzoop.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163edzlxakw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ejzbcxmx.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163ookrjeuw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163wsrprcso.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163fyjaoxmo.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163uspszvdd.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163laaqzpyo.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163fyhcnkvz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163akhgpydz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163cyegipgw.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163upptyjir.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163hexcefus.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163lfccijos.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163vinkxvat.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163fayxrzpf.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ngmpuium.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163mozokqgw.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163duwrxlrf.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163pqdsfugp.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163qvwencgj.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163eegcrbgi.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163kvqgastw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163cfwhrony.html

================================================================================
来源：http://www.xuanzx.com/163bopcbipj.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163ohjnxjzf.html

================================================================================
来源：http://www.aibaodan.cn/163owdfohqe.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163lozgqqby.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163bfbjffcn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163gnnetgvg.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ovavllkx.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163vznqtyqj.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163edrjvmti.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163lkbfubna.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163hfhfyerk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163pacomdfw.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163lhkcnkuq.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163fsqixrxj.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163chnnrzpl.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163cdnmkcbl.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163lheignhi.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163awdigzei.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ugdajhbw.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163tdvfowga.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163uxcnwqoe.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163dtugjzcr.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163lqsaewgv.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163fovnipbr.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163qtfkdlwy.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163gityyacg.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163zjbpvoyy.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163qaxkmyjo.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163pyfmrdju.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163prxqyaok.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163iwmawmdv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163nuyvrbpa.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163fwwuvawy.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163isoesxiq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163dmuedalo.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163hcxftggb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163byfmyvcx.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163dkjzhmle.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163vyuhjfcr.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163mhfbfkdm.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163nqapvhsh.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163yneltvmo.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163xoatafoh.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163zoubgbcm.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163poztaabl.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163gdztxmva.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163hagkgjyr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163vsxecaen.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163rasadhqa.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163xtnftkbg.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163bptlnxys.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ykkzjzrk.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163cwisrymw.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163ghphjrtz.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163lewfsihz.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163hfbnprfw.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163lfeosyda.html

[K07] 进制转换
来源：http://www.xuanzx.com/163eieijplt.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163skpxrwbh.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163hjszdrfx.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163gpvxnttk.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163vvroyhld.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163qezggjld.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163mtrwlgcw.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163hxnljzpk.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163dmmcvjll.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163fepsvubt.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163sxcpfpxh.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163bmtnytzu.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163nmidxqud.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163aqhyuljk.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163ssxwtbiw.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163knulejhf.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163uhalsjnw.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163jstwevug.html

================================================================================
来源：http://www.xuanzx.com/163pxukbtwg.html

L. 网络请求
来源：http://www.xuanzx.com/163ddgypysg.html

================================================================================
来源：http://www.sxryk.cn/163sclnxlbn.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163pasvlqwb.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163odqsxwly.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163zmoizolo.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163przulbop.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163otidsmzl.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163rwlsheci.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163lgigapjc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163avopaqjj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163xxvmanyq.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ymzfkjwr.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163uwtzbjfd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163lpkmogub.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163hfsdbysg.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163nwglkwkx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163bgxpkfds.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163pxrxmwnb.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163wlcekchg.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163qbpmwmra.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163iqnrerpl.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163ydewdvec.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163fxdedtbi.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163qqwsnqzt.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163fhgewbgc.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163earrodkl.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163qzjkxcms.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163pjeubhqu.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163vcbuahcj.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163blrnsckn.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163jkbbpcae.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163hxeadavx.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163fzmyphyu.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163jencnicm.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163qtclfnur.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163tdizfvzw.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163yxiiwcgs.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163rcoxizaw.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163iogimyjn.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163zugkvhrp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163rmlwzwkp.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163jejgxgvx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ovigkswg.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163mwlkspjc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163qrgngszv.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163mvjlvuds.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163nykdwwry.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163iyldngdo.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163zjbwhezg.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163ijwoimfv.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163wgbkqpmv.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163mmvitnde.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163ptsbqvdp.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163ygrstcsf.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163ufqtrwtg.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163jjvwzqzp.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163dvtatvnw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163qzrglfth.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163hssrexfd.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ngwqxqtt.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163aswllvzc.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163ixiwbjal.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163ytobrkds.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163jazihhnz.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163zhglvjkn.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163bbijivnq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163hcjsqmax.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163huujheag.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163reqhntjx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163sqduuugr.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163qgqtsuax.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163tbxlmkgc.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163btipzpzu.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163iplnrwqe.html

================================================================================
来源：http://www.xuanzx.com/163yeophahu.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163evbxchtt.html

================================================================================
来源：http://www.xuanzx.com/163vkdbhuqp.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163qggnrnnm.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163naznrnli.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163hzjwkotj.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163wrthzsuf.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ualwgydg.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163ypdkmile.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163wsfbevzv.html


<!-- 参考信息 -->