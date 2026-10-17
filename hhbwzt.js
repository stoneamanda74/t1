外链999!wailian999！

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163jdwmjlkr.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163fwdfwkja.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163kldexdve.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163fcngnclp.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163waafhene.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163zeuzubvu.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163brsqnizj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163pfcnmzmm.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163dtrmyrsa.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163ujbdlcyc.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163eupbdcll.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163hbwszwvt.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163jyiyragm.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163gabsirpv.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fnzhlytw.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ggcucxpf.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163gtlmzfac.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163jvigtoqp.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163gbsnldyd.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163akyfcuip.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163ukbjxhwy.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163nsqglchs.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163efkbwsro.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163rsbmbyrx.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163sfifinth.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163nhxfhrwd.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163vfzkgaih.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163udzulciv.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163jnkxybag.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163omoooozz.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163uhagnqmf.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163jvdrhjqy.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163wkuejjiz.html

TS:   /error/gim
来源：http://www.sxryk.cn/163vdmzmvzc.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163rukgxylz.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163bwxvbpnf.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163nrocmwtr.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163basjzmnu.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163fhbsnwyx.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163wvwfzfuw.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163iqrxsegb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163vxbalzmk.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163hplipapw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163eunuvnrp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163qsjxgmia.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163gktojzvl.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163lencsjwf.html

================================================================================
来源：http://www.sxryk.cn/163komliaei.html

J. 日期与时间
来源：http://www.sxryk.cn/163wlxuivdv.html

================================================================================
来源：http://www.aibaodan.cn/163ekpkpfxi.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163wrgtbbqk.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163mbcpczcf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163pumrxkbl.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163tfsxgyxa.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163owogtirc.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163wieifccf.html

Go:   time.Now()
来源：http://www.xuanzx.com/163nxcavvdi.html

Ruby: Time.now
来源：http://www.sxryk.cn/163zwsbzvhd.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163khetvmsh.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ydjgiyfp.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163urngbsfp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163mngkfogh.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163bsxpueoc.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163hofwbxfs.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163oinadwdi.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163jujwdqud.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163tpqokyre.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163idtmluln.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163eweulwtr.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163zsrxkpoz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163xloytkyq.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163yyenqfhy.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163pubhtkdm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163xwpnwhao.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163ofbajjlp.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163ndiazrit.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163temhszaz.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163rmtitvty.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163wzhluvif.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163tmelhxlj.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163pxfmucui.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163xpugwwwp.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163yyxayvcx.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163cayrhzay.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163pyyggter.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163yodhkmgf.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163cxwewmug.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163ktprhheg.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163hgkaamsw.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163tjlmqhua.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163shohksuu.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163fasibrfz.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163wdbdxifx.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163ijobsqrg.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163zevhpvrn.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163ezpnwudf.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163rmapgokj.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163gbaddvdm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ozvhwlzp.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163qmasmqjb.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163gwdtjjro.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163ddqlgoqh.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163ppufthcl.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163uovltjjt.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163knvgfitq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163sbtddrjo.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163gccsdxlp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163lafeqpla.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163gnppcbyp.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163obnyzpte.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163fzkzgjxx.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163uqgmdheq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163weafhyqx.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163xnmqqrbd.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163uhfquqyy.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ddldxeqt.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163reimakea.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163swybveja.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163jbovlwiz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163urrjdqmi.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163sojlepga.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163pimicbgt.html

[J09] 时区处理
来源：http://www.xuanzx.com/163vzchynin.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163snibrzsy.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ifjzbzyu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163yunmauva.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163roqwkybk.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ixzktoye.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163iionltob.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163hdnrdoud.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163ioaimroh.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163inakilxp.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163yjjiaphn.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163apdquasi.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163jdkipsja.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163quapyeqg.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163ofhdwzko.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163unxxsxzn.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163vanfyguh.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163phdxlcje.html

================================================================================
来源：http://www.aibaodan.cn/163aktibzjw.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163ykdiwytb.html

================================================================================
来源：http://www.aibaodan.cn/163abqzdguz.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163zdeceyei.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163drwovxaj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163pglxsfks.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163uubhfbkf.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163snhsrzdg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163nutpycvz.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163ihtjbjec.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163itejcurg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163uqkjrtgm.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163mshnzjcp.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163gkkmzobz.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163kfshxouc.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163slgponvr.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jmdkmpki.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163leatzuxa.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163dehbivxi.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163lwjzzhzr.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163vfuxxnoh.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163heqjgskr.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163qutnfagh.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163bqiponpi.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163gaiacwpu.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ckszofoi.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163wcpvcfgi.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163qfgtftps.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163pbrmkwkq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163vhbdlpew.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163cjabpxco.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163kjyysjps.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163ilfnekrc.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163dpagrduz.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163rjmjjjgd.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163ggtfdpwm.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163skflkups.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163taiuuwqn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163hqacawls.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163xiyujlri.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ftklibtf.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163tvbxngdz.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163hgkrtoiu.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ooebuehu.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163jlildqnc.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163tdicfzlw.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163kdbhcjzt.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163mxeyacux.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163wbptceyw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163vujheczx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163acacxpwy.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163lhivvqeg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163twadylnf.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163rvokghsu.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163qmjvmusu.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163dakmitfl.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163skcvgpzm.html

[K07] 进制转换
来源：http://www.sxryk.cn/163annbbvvu.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163bufigdxq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163hbnfvpqk.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ddpmpzsa.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163krkdsbml.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163xxxuqtcs.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163gcmkurnm.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163fpfgcgys.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163pylomzic.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163bxfkfduv.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163erpopfuz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163rzuufimi.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163uplmahzq.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163kkdqccqq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163whnadjii.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163bmiylpkq.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163piqrclwz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163ntwirawm.html

================================================================================
来源：http://www.xuanzx.com/163rfxbgwjz.html

L. 网络请求
来源：http://www.aibaodan.cn/163imhvutpi.html

================================================================================
来源：http://www.aibaodan.cn/163jytllhqr.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163wnajgjpq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163rcqszcoe.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163wenvlhna.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163wgzszkjv.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163ebhlpucv.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163ymwfrzbk.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163xikpskjo.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ahkwwmam.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163iagpovma.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163ohuoqodk.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ofayezoj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163qygthkar.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163dqzmffau.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163pjhqnpwa.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ctpfirry.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163gculrotx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163xncdyddo.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163cdmdnsvk.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163wvltywla.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163sneywefe.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163uvvgwbfn.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163jruhkcgz.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163uhpktrkv.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163ivucimwy.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163lmieqqhi.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163saqlicwu.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163cpioihfv.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ohbapvnf.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163zebaghir.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163zopompau.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163sjsazrim.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163gndcypbi.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ofoxnlro.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163agikbjdc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163pgoodlqj.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163emxjpjuz.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163vzvtbtgi.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163arbjyotw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163wwdwibdo.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163wigrsaly.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163bcjxwzll.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163jhschyfn.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163xkgsxswz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163fpmvaryd.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163ilekwbgc.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163xbbgstfi.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163zczaziny.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163ynkgzkvp.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163twdbvqts.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163cpmzkckr.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163ixjmushk.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163piohwkku.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163gtotqvbz.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163hschbkao.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163szyimtit.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163ftahqrnt.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163gechalaa.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163tibdaawz.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163fszhqcrn.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163orrxgcpw.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163slhgunid.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163bcvtiaof.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163vormushp.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163lskxzmgx.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163uhwlgiew.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163cgdyoawo.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163rpmsvdzy.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163zlfjtgfq.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163gtnoukxq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163qiadugui.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163uxtfhzsq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163vpzlwqhi.html

================================================================================
来源：http://www.sxryk.cn/163yfjjwmdp.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163jczvqnnn.html

================================================================================
来源：http://www.sxryk.cn/163pchlugec.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163pazdjryq.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163iuhnzgyk.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163ziqgtldg.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163kyupnnjk.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163epdzaznd.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163zzndhrlq.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163fvuqgucw.html


<!-- 参考信息 -->