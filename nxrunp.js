外链999!wailian999！

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163noiipcci.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163bjmlakqk.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163wgiaxpex.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163ekvgyara.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163kykjjlyo.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ovqqnlqb.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163xyyxyvyh.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163chccwmyx.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163jtryhwgy.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163qpvyrprm.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163mjlysoqe.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163byprctlh.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163midswspn.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163ptgavhsn.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163juxjipfz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163wymlwuhp.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163fwuxrfxk.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163elmwsgdb.html

[I04] 正则替换
来源：http://www.sxryk.cn/163pearktmv.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ezgzzkqk.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163wvnziqcr.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163mlctzsvt.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163xtjmnqks.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163ooanafwb.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163bpgjcuyq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163vrvhkrwo.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163cduvobvz.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163fbpnmqkt.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163kousuurj.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163lwkfnemj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qejxsucd.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163zemhkzjy.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163zwrwmkqq.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163kwwmkrjm.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163hqsmrfln.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163euzzvnmt.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163ggposanq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163bshdrxeu.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163zxkaitwx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163lnltqgor.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163nnnpzavj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163weztprqz.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163abtiyvfx.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163xiyjpedb.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ruhoevhg.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163munzimaj.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163eagaujsd.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163xhumbhtv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163bxeukrmd.html

TS:   /error/gim
来源：http://www.xuanzx.com/163sghlgkrc.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163pshvfpok.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163nreicnyx.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163kimnzelv.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163nbdeqkph.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163ogyxodqq.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163zrniexgj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163yknvsynr.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163bjvoqwjx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163btwptopi.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163cexfcdeh.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163oecvdpon.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163qblumody.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163nmppaqjh.html

================================================================================
来源：http://www.xuanzx.com/163evkdztzy.html

J. 日期与时间
来源：http://www.sxryk.cn/163qoqwhdub.html

================================================================================
来源：http://www.aibaodan.cn/163vgvcodhf.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163yrdhuuqb.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163gpirrusz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163gvbmwoot.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163winbgxam.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163yuintrul.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163dslcqjiz.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163bkywcuar.html

Ruby: Time.now
来源：http://www.xuanzx.com/163wvjripgx.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163hfbugifo.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163iawlubhi.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163dyiahqse.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163foyehqke.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163fxypissw.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163jtwvegit.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163vqpfynxu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163cnzpghrq.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163kgvsvmds.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163vamrymtx.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163vekxepgs.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163detecwog.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163jcawbrjd.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ybmuqtyx.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163kofqvpvn.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163kloxvcoy.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163dtdhhusb.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163rhdiglfm.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163vjppwpmw.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163jnaoxmcu.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163hzsgrupg.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163segzszig.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163nyedxjja.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163yjpppbsw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163jeownine.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163gljxzvpm.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163nalixull.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163ayzhxdyr.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163pjnwuovo.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163dbdxupoa.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163unepheyc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163sxtunpmd.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163cpolbakz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163dvgtltol.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163uxbaxcwd.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163lvdfjeoi.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163oadyecji.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ngtuibjz.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163rnntbtcz.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163hrvqqkoz.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163qusoglrn.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163kqmlctwj.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163rtsvgsjc.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163ummxhlhj.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163dfocxfaj.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ctrhgkhy.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163lbtsdlbn.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163yuyfobmr.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163dizfwbsg.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163jyquidzi.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163bdwuzyru.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163eqpaeknv.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163sfaiyhoh.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163wqaxmfcq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163xysvmdvc.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163afprfmvb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163auzksuzy.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163uzbjmivb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163urhhodey.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163ctnsphty.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163vkvrovdk.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163otwhfqar.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ifuznlfg.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163mlrllvrk.html

[J09] 时区处理
来源：http://www.sxryk.cn/163vqmgftrm.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163dywnxolp.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163fzkmehiu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xherdacw.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163buuvtrta.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163asqbqxea.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163xyvxblas.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163yyrnboxb.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163zcvpnwut.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163vdehcwxf.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163zdkbrdva.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163jenkqpvi.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163qfdfsqon.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163owlpdqcy.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163jlpycgka.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163zuuddnew.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163brsbsgno.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163jixtcsqk.html

================================================================================
来源：http://www.sxryk.cn/163egcoowqc.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163bnysliuz.html

================================================================================
来源：http://www.aibaodan.cn/163wwwbwlnb.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163swbiuyho.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ikleaxfl.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163fadztcbb.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163geexqruz.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163kopimqcm.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163idssgaqj.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163kjhvouzc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163vxzfwmxy.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163ezfigohc.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163rjqcszbl.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163fimziwab.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163dzogqwut.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163sxareulp.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ensqpjrr.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163vrhqkyiw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ttgubpiq.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163asswxvhi.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163ecpzsgnl.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163vlzvugxf.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163osytefan.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163qwgwpgcy.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163aysorzkj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163fqpewhli.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163wollfxnr.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163zamosdks.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163uzpgufxs.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163fwzwmerk.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163jhpghknq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163rwewtbbd.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163batddikr.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163buamiuuv.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163dfewrnzg.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163imtkmuke.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163tqnvsfij.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163xybrxvfq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163dpjnjomk.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163tdgtuhuq.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ergnednw.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163zjdnippv.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163zrnrnugn.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ljttplyx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163mtwfmuwl.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163srgfookb.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163bvkdceqx.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163cgjnuvxo.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163jbeshbgz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163dbofjcqc.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163kqwlodlq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ofmlzdpc.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163yxuzmrvd.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163pshivgha.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163xxtuzvao.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163mlbbybbs.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163isdtqpiv.html

[K07] 进制转换
来源：http://www.sxryk.cn/163rygpavxf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163oshqzoyt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163zvozcppy.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jsafqagu.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163lxfwcpcp.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163pissccgp.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163airolpuj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163gnfoqjvg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163epulsost.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163hkspyuqq.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163kifmfsvv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163kjbbucrs.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163mogovkyo.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163kfboxnwb.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163yhafiflp.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163cakunqbx.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163savloeii.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163uqwxogew.html

================================================================================
来源：http://www.sxryk.cn/163grmaomim.html

L. 网络请求
来源：http://www.xuanzx.com/163tsajisas.html

================================================================================
来源：http://www.aibaodan.cn/163roqddgpw.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163onmgagub.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163psvawnuf.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163jzuycbxm.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163idlkvpld.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163owlgcemp.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163ozuqqqeb.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163ocmfethp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163vrsgzlih.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163gebqqeci.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163yfnmtnfh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163uuniygkx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163hzgomtuu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163kwzmsjnb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163pjdpdqel.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163wuyvrwia.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163ftgqxvlm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163ocmepxjc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163cpnunbgd.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163twdbrklc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163tszozapu.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163mmrsmtym.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163qyunowat.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163khxlxpwz.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163nfudlvlo.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163jjackbhq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163hyklnaxx.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163dfqvscny.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163itbmblvg.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163wqxhkmkc.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163dkktupnl.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163lcgdpktz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163kwicgfzo.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163yuhkgnbl.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163oxaoibjj.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163jdthlwpl.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163syrpausl.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163yeaylvys.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163yqdvkshw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163mnlspzdt.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163naftulyd.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163rqldakez.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163nmovoxds.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163qtzjdplk.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163hxkzxoxl.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163nmcyzdru.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163gdwtqnmz.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163hswbesgl.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163wkcmgxfk.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163kktnopre.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163bdrzmxfh.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163plqwloul.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163wsminluu.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ljpnccfp.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163wbpeqnru.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163gkaorhzw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163lldjeqvw.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163uqzjxrzl.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163xrpusqmq.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163wnqktwuu.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163iriohjet.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163dzyujzzb.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163nxwvxknx.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163dfwdtjjm.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163nwhklykt.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163exgnxggb.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163wevphazv.html


<!-- 参考信息 -->