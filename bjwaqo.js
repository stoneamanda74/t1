外链999!wailian999！

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163mqpvxlzw.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163jpwcmdap.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163hsajmqjk.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163mbxrwhli.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163lciowvxe.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163prvrndjr.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163pdokriqw.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163xeutfcgl.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163vgjcszyl.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163iimztehj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163lufbktze.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163zjyvhpnk.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163qxiqocfy.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163njhbwsuw.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163tyzcgefo.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163xjuibqqd.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163blugialc.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163washljjm.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163zaovrsbd.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ifqkzzpw.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163rrydzvtp.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163rmshwlqt.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163adrjkzcg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163qmheutvd.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163boqenvbv.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163liuxtawo.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163uxevkqpq.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163hanehvon.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ssfqsjlw.html

TS:   /error/gim
来源：http://www.xuanzx.com/163atchmznu.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163rhnwobwt.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163gyjnpkfo.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163yfhqorel.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163nxljiavl.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163jidbqwfn.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163lnayljto.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163wkikmkyj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163bplfdvyb.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163dtjdgwth.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163nnfyintq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163ncfefxzo.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163ukrwyqbr.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163trxldntr.html

================================================================================
来源：http://www.aibaodan.cn/163yacbuoup.html

J. 日期与时间
来源：http://www.xuanzx.com/163pwqgczsv.html

================================================================================
来源：http://www.sxryk.cn/163lcxanpkb.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163zsthpdff.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163afoxlwwe.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163nqluebxe.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ovtnkgzd.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163egleitfa.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163xzusaucr.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163iaaihxps.html

Ruby: Time.now
来源：http://www.sxryk.cn/163vjfxefly.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163qtazyfyb.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163wmphihni.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163dazyxbwx.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163arxiwkuu.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163qjhcfzwi.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163snpxtqgi.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163ersodegq.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163jvfqaikx.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163jomkybzk.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163irhpgjwm.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163xqzzcuec.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163ozznbgwc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163apbeufgy.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163iuabrzqj.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163sazzaffh.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163jtivvmpv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163cfbmwdyz.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163wzfevxbf.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163hxpqjgsr.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163timlbdlc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163zxndvdcj.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163vbhpojgv.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163ofcfxiwf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163bjamxkom.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163csusnaou.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163rqewzqpu.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163sufevuep.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163qscuzmnk.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163wgshbkfp.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163bmbuvvcp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163tcfoyvwp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163gihzeret.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163izrwfwdc.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163zuglauns.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163oiiqpoal.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163hqjspnzi.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163yibjizdq.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163ozyprvuf.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163iwezpbma.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163mfolehze.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163iqbtpsev.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163avatlusa.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163rkjuxluz.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163bymfnjfb.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163irupavun.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163tydqkjrf.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163esyzkyrt.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mlvpodlz.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163xttdxkhy.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163pkpvbnxx.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163lyzabwdi.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163drcjhkbz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ifoxmpyf.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163kgszxlgj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163divstuck.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163dyxfrlrw.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163yvwmsrno.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163feokptde.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163ourdugnd.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163clxgqawc.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163mdtcplqr.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163cfzzmbwq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163ieeaizrz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163fqwnucvk.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163rndsklli.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163xlwlsvmt.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163zcoolziz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163wpgdaykb.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163tnoxrhcy.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163vyybuewg.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163ubwmzbpc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163kzonuysg.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ylhbjlce.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163siwidabk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163dxyeuogs.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163udeiigqy.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163usgdaiso.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163sujkhzic.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163bkjqkgun.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163afuqdhii.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163klrhflys.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163swgjbtei.html

================================================================================
来源：http://www.xuanzx.com/163friwiant.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163eolyymrn.html

================================================================================
来源：http://www.xuanzx.com/163ysyxqsjc.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163snjfynyq.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163hgwaxuce.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163leaosgld.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163wctjcnnp.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163gatimgjt.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163nehneguy.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163plissubi.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163spgslxpo.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163rxrfecam.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163edyakygc.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163mzldknwc.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163urblptts.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163xnrtofvl.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163myoloinh.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163pcszkgmc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163pljzbyzh.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163hdbtqciv.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163zqnscjoh.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163okphfexc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163vlmjncjx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163cecjuest.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163erisfwqi.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163zcddansi.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163ftvciqry.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163vkpyzyrz.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163stgaumfc.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163cjqkurqi.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163izmfcjnn.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163rtpkkyhn.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163gyxxdwnx.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163puqzmrxy.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163cqbxhsnl.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163joqmgjph.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163xkxcbrui.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163lwjuenli.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163yuksegrl.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163ibkgslay.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163ashywugn.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163kfgvglhw.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163izndhjno.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163oysgdibt.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163dcguqnbi.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163gkjghixo.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163sqvbckhl.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163gkapszwt.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163rrzfonsb.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163oorcxfbq.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163zmtwxixm.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163nixrjbyg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163jyewybqk.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163kbdcrmob.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163gdhgcnae.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163fjmhlftu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163sxwtirro.html

[K07] 进制转换
来源：http://www.xuanzx.com/163xjcmjrjl.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ujerqjqt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163gelvbivt.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163erpdtpta.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163vnybazxb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163gsucafwr.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163wbntdsvg.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163oneamofx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163dyvdjtkr.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163qozoryar.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163upqulgax.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163sysrpoct.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163kxsxhozd.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163yxzvzhvo.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163gwgmjhef.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163svxmglcq.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163vvummlcz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163bgrennmd.html

================================================================================
来源：http://www.aibaodan.cn/163wyqzligi.html

L. 网络请求
来源：http://www.sxryk.cn/163wlnbyppu.html

================================================================================
来源：http://www.sxryk.cn/163buexitqt.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163kkibetza.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163mdxfyefo.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163zvdkpkyg.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163cobbjkqw.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163cjehzrlg.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163gwuqpwmn.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ayyjrinn.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163wykmclvc.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163eynryxgc.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163rdfgczbo.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163vuxvfkqs.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163gmoplsuj.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163qbwnfxsq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163yooqnoeo.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163pdpnfxgv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163rjuoehhm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163weavtzud.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163geyabqwg.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163gfzywwpn.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163vuauvweg.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163jjrgxawx.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ylneuuym.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163tvkvwfka.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163hcrixyoa.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163hcdvoayu.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163lgmuujqn.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163gekwjujl.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163lhbducty.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163cfgfcyaj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163fuxktpxp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163uowsugvo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ikdfkorl.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163rfzgtjhe.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163aclgcosp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163clezxsxi.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163etissjru.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163tmffoomb.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163otsckmzk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163pptlmvld.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163wjmrltge.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ydtflbfd.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163jwecizch.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163ecehzkrm.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ofxsjtud.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163ofxhuhvr.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163enarcuio.html

Py:   resp.json()
来源：http://www.sxryk.cn/163jfaowejh.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163eoiwgygo.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163pzomwdyz.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163psdyfpel.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ekjahyqq.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163lmqdhrzr.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163fcfrgpnz.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163dpqrqwiy.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163vandiquq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163saxlnstm.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163umjocyei.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163zpxxawyx.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163qoztqwjm.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163kwkoycaj.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163lgbpaxlu.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163wnowqvoq.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163uusvxulp.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163wuskwymt.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163tmozxqwq.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163noihgxbf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163sblfizbs.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xlopzxcw.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163edtullio.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163wxdrdkxv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163jwdaqepy.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163gpcqhhap.html

================================================================================
来源：http://www.aibaodan.cn/163tmjjtesb.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163ygutecct.html

================================================================================
来源：http://www.sxryk.cn/163tcmpwgbk.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163zdpplewz.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163oedrdudc.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163tbwrklln.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163qsvkrksm.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163wkozumbv.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163ufqjcilz.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163fowxsife.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163jrkthnsf.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163xrksklde.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163cxgtzqbs.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163jqcjcfzb.html


<!-- 参考信息 -->