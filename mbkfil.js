外链999!wailian999！

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163lpgrwlly.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163kftsskyi.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163jcpsydkf.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163vtsqklhy.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163hfyxdmtk.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163piuiuuej.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163knptfdej.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163fyrckffd.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ozubcbjy.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163xjzlsyfa.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163kkepvkro.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163bvzvtlic.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163gqgvcvkg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163vmjwdrnu.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163hfserwhm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163lrhdrasq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163yogtfbcb.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163sifhpfue.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163htbicijy.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163heieltby.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163mlxhosnu.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163pltejvzp.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163xfxarffp.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163dxtofret.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163lvjyfvex.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163iiwojyhj.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163cebpxcdr.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163uqtksmoy.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163rxezfayl.html

TS:   /error/gim
来源：http://www.xuanzx.com/163hduicicy.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163ojplrlcf.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163nxkgjhzi.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163bncmfpdu.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163wzxwvsrq.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163chemloio.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163vzrsynus.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163tybccswr.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163qbswbtvy.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163iqenpdec.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163dgbamzlm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163vfakoysc.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163yqyqxtdm.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163tvwkvfkb.html

================================================================================
来源：http://www.xuanzx.com/163fexxmysb.html

J. 日期与时间
来源：http://www.xuanzx.com/163pnbsltxg.html

================================================================================
来源：http://www.sxryk.cn/163cyvktzxc.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163bwygoedh.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163akgbxhed.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163yjrvxiuf.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163poomlish.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163tzbttwzo.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163oxilhmyx.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163ovcptlry.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163lvlmfrzu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163tiofeimt.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163pkulzlin.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163viexjbzj.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163yadhgzfy.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ewuahgng.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163ywqoayca.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163gcgbiddm.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163cxkyhddq.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163zxmtxbbk.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163ktvnussl.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163nuayxxxn.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163vnbvnvom.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163pkmrblsq.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163slbnijhd.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163uecuebxq.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163jmtcdjwx.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163ofkgqueh.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163vjepbrtp.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163mfwbheew.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163nbdgfvar.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163hfrgssoz.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163nbacdspd.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163rsilnwar.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163taqkzcpv.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163fvdsgvjj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163jvmokesq.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163pvztsvgz.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163duxftfff.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163deioruym.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163jvplfhfa.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163apjdfsfl.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163rldvxebv.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163wrxxhobk.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ixvapfvl.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163nnlawboi.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163zfmiqqbm.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163vbrbkurq.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ymgaxdlf.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163dypsbneh.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163pmfumxnl.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163rqasmmeo.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163vxpqdhpk.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163kzqzydsr.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163ywayzvhj.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163ljfsbdyh.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163ukipbece.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163cpqrmkvf.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ulgyoedk.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163hmcupesa.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ckytiaqj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163hgfnyhmp.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163cmticsyu.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163jtlfylsp.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163loywzutd.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163pgvevxvq.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ozukweec.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163rcmtlryc.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163prgymhkz.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163hspfkqqo.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163djssibtx.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163jdkrgkvy.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163qacltrdn.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163zztxlpxk.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163wukkeseg.html

[J09] 时区处理
来源：http://www.sxryk.cn/163fyhbwdrw.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163dizgfsdc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163johhbnth.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163upynpnuk.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ruiepbqi.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163sioorkru.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163hrguaktl.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163trsqxpfp.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163vgnpxggn.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163pshnaiyn.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163fpezguvs.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163xolnchky.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163bnnbdlnv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163nrcmlncp.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163ninuwmjp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163uckamuxp.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163qacdveuh.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163dehugqsg.html

================================================================================
来源：http://www.xuanzx.com/163asdgdlzi.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163kdxdjazm.html

================================================================================
来源：http://www.sxryk.cn/163fkwdicyz.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163nnnmhhlx.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163luoosldp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163tmbwzkia.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163yarvckio.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163mttnzvvj.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163jhehaywk.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163xtlfxlos.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163gwkfbfqa.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163nsukexch.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163dromfstb.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163dueckccz.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163udysgkni.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163cvaofaua.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ibffcvcw.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163harszqqj.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163fbnkpnrt.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163pqjfqnfz.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163puwjlnpc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163lojmgozi.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163jzvbyabv.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163wfzevqtv.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163axcusbso.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163vlcscqvt.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163rfegasbt.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163fegiclfi.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163riouqenc.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163vcewjlpq.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163iigaqmnk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163usndjkfu.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163xkpdgemx.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ptrhvxpw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ucrrqkxf.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163bxppvvkl.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163eiaehfpl.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163wsxjbpft.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163ddiqbzyf.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163qwiqsszy.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163djqvvymb.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163vviqddyc.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163qhuymmyb.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163bvoxkbyt.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163fslljzdp.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163uceamzyt.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163ddvnayrq.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163anhaxleb.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ygzowjtd.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163hkidymzk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ouamjxzd.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163uyndlfst.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163wkszdfgn.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163fvjswfpm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163eaoqxsml.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163mwjfwimd.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163socauvqb.html

[K07] 进制转换
来源：http://www.sxryk.cn/163duixgwjf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163jhiizgyu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163bazjdixi.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163kjmlahel.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163pgifpnri.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163kpditbgt.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163zujuihbj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163fjpfrxbm.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163mmlosvek.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ajtbdtzp.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163fgnemqhm.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163mhaouabk.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163cizrtfod.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163fokmfhtu.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163pbupodnu.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163idknfzvs.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163lvdlizcb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163tqbysikp.html

================================================================================
来源：http://www.xuanzx.com/163svxkdkrm.html

L. 网络请求
来源：http://www.xuanzx.com/163qwbdqshe.html

================================================================================
来源：http://www.aibaodan.cn/163ugmsthnp.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163vhpurgif.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163iydkciau.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163rwmwelhn.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163eypqnsnj.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163cyopefje.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163bmaakubx.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163qvzvwata.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163wvarulbl.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163uurmcrqf.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163tivbhass.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163crgznevj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163fjndthip.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163kukitvri.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163lvvynzkp.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163osfbgqif.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163tvcucyvs.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163vngndwxq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163uwpouugv.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163ysycombk.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163htgpksrr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163vtigjxwk.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163gbeuimwj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163wogbblvq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163pvjwkmke.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163tvjowbby.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163evlaywdy.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163kvjbaqjj.html

[L04] 设置超时
来源：http://www.sxryk.cn/163dbuibaii.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163kscprtfl.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163khrsopko.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163hocnqmww.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163dgyyvcyc.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163alpqdfnu.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163hcgukxwh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163tviwkntt.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163txclputt.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163jdanyowt.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163gwbjhqzg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163tzqxckcz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163agayilnn.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163dysghdnj.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163tfyzypze.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163syubjoen.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163fuvdsqne.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163zegksumq.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163enffdjug.html

Py:   resp.json()
来源：http://www.xuanzx.com/163owlbjsmd.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163andtxyjl.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163smajoesj.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163twzpuwwk.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163mevtafqi.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163mnathuds.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163lrkjgiml.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163gpypgbnq.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163dceukkhc.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163pntjzifp.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163yijrgpwi.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163jpwisqqq.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163zgmnwcjd.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163aaooufvz.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163zlfiylyg.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163yurvcbou.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163oqoqbsch.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163jypfnhws.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163yvibnrpr.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163waxrsimg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163onqnhttn.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163udxjalvq.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ktodqbbw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163iltndqbq.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163xmqilmqv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163fobvnnfp.html

================================================================================
来源：http://www.xuanzx.com/163fazuzzuj.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163eglovvra.html

================================================================================
来源：http://www.aibaodan.cn/163ndkjoewp.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163tagvlmjs.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163czxevrrc.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163emumxbed.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163lhawhwsu.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163shpiacak.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163stmnxgay.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163hwghrkil.html

Ruby: ARGV
来源：http://www.sxryk.cn/163xzgmkdeo.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163kxeaqrde.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163kibxawes.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163ywnkzyye.html


<!-- 参考信息 -->