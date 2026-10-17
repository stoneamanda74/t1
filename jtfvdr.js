外链999!wailian999！

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163jaadklsi.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163xcxjcjlf.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163spwqjkpx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163jgtjzbzc.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163jhulsygw.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163ujglvuuj.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163fygrvaga.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163tttohyoi.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163ylmspxct.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163yhpfrwcf.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163ktrywgpj.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163tcbgtikf.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163nrgmeylj.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163rfnprauk.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163efdburoj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163rikauiem.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163myafmryj.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163nezcjnbd.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163hzeurohm.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163bowmlcag.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163fdcdycil.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163pqyokcev.html

[I04] 正则替换
来源：http://www.xuanzx.com/163uahpmapv.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163nffnvhzr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163gmpancda.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163tyanjshg.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163shsfhwbq.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163jvmmfpof.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163ixbhxomp.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163nqmvxsns.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163awkhyqco.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163zzimvawi.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ewbedapc.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163verxnbcd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163zfuqqzzf.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jygqzfii.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163svkwvpvg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163llsykdsr.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163wuulzrts.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163pugnfydr.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163pmfobdft.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163eicjxzgi.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163vylynycq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163aatwilhn.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163bfocoiyy.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163xqqypmnq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ubhqbmuz.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163jjsnjvdg.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ecyltdqn.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163bqdnyebf.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ncifhwjf.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163nidwkikf.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163ailcwckz.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163keknmatr.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163uxgvdayy.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163foawcojv.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163bruannos.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163ikhkzyyk.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163hljdzehl.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163dzjezrfl.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ttkngjjp.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163etxbotvj.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163uuuqdxdk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163htxeedhg.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163cxtwnybw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163lbnjljlg.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163dmtoclil.html

================================================================================
来源：http://www.xuanzx.com/163kqmmbmgk.html

J. 日期与时间
来源：http://www.aibaodan.cn/163pobuuyrx.html

================================================================================
来源：http://www.xuanzx.com/163tbydwoqy.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163bkelvdwo.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163objomgst.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ewhxlbsj.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163gqldakkp.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163lgcscggg.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163zhculgsd.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163kursiidt.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163luzzuxnb.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163bypekotx.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163yhybcvmt.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163hdevmkka.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163krkcntby.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163wzeesxet.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163iugurjet.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163enjguxcx.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163tmjxussy.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163lbseljlw.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163aesviraj.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163zrezfjns.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163lmzcwzgi.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163qsrsihpf.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163baqmvdvg.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163tvvrfbbm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163vtkphoju.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163qqybbqxz.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163zgctrpug.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163kyeaqfea.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163vmxuxshp.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163dwidwlpt.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163xcvjzhuc.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163pzcvltxm.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163gcfhdgym.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163lhcsqfad.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163pbnquwmn.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163htvmixmj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163azjgbiwy.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163ddzkafyt.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163aewzfcet.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163vgkasszy.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ioxjgryo.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163dilmpkft.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163jmgblgeb.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ztwezqgb.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163uvdffdlh.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163vdspyazr.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163peftrlrl.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163kanmwyvo.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163kfiuhkfb.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163uvlazhci.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163dgmxjcpt.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163mtnxblyk.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163jhgsqljl.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163vdgxlduu.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163etuwwtcn.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163rwdyeyow.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163tvzgqlbo.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163bhqjlfib.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163lzgnobzj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163uafboiwq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163ygirgdeq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163fuwphorc.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163rrnpwpcl.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qxkmfpyh.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163witsunuy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163ydmvxgst.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163rjivleto.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163zctqilxx.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163tkodzgsc.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163aykxjqzd.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163eajuzods.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ovtnehlr.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163nxnyofqf.html

[J09] 时区处理
来源：http://www.xuanzx.com/163rmkaknjj.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ivrcliqt.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163wmmumxzw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163gcszoymd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163gxtzohku.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163dhsdwwah.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ossfpxxz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163mdygqnvg.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163yzbasjrl.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163dveucgqj.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163myhwtoui.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163endwqjys.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163pbuvcwsa.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163gfpaxpsx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163zlcfsiyb.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163hvlkctdw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163shtisvbi.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163cogbvknl.html

================================================================================
来源：http://www.xuanzx.com/163jswwqlqo.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163matixyyy.html

================================================================================
来源：http://www.xuanzx.com/163klmpwsxd.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163szeuonat.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163rmslqsdh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163yittshhe.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163mykwwteq.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163fxclkrto.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163hpxekowp.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163btfvydqe.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163vjcuwlcs.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163diamdswg.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ygwktqrh.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163bjargaqc.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163qywkqsyo.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163rgbpyank.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163gwgrxodb.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163mzoecxkz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163kmhawebf.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163zypedztk.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163qdgzcxwt.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163hbedfhtb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163rnttpuzf.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163hqedcfhu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163rlxxbrrr.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163upoapdeg.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163nbggkbvn.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163kchomnqp.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163nravszmt.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163rfjotclc.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163dxspkeab.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163zqmrhjid.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ciwoikyz.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163uukkzrkl.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163beqjboxp.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163bdkbwkpz.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163gzlzzmtr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163qgqespsc.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163jpcppylv.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163oniotoef.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163lkrpczcr.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163enwqesvs.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163lolhwnwk.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163alfacwpx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163fyrcdhxs.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163tqnnlyrp.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163illtwgrp.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163icubccde.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163iieqesjd.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163vqknerjc.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163vqyqepug.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163snxlkldc.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ainsdzxn.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163mrurihor.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163yfngarwf.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163gsbmizix.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163itjrjszp.html

[K07] 进制转换
来源：http://www.sxryk.cn/163nndnftbx.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163abborvqs.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163gpevgucj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ogksojte.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qwjwilts.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163gtnkryys.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163bqjnmywo.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163fwihxdey.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163zqxyaqmj.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163umkrtenh.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163rdbtupqo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163vsjeqhhj.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163qgcbqayb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163dprmhmoe.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163uwybzgpg.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ueglagwa.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163igxtutww.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163wyxzeaip.html

================================================================================
来源：http://www.xuanzx.com/163awuzctmb.html

L. 网络请求
来源：http://www.sxryk.cn/163uritvnvs.html

================================================================================
来源：http://www.aibaodan.cn/163dqalrobl.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163feztfbgd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163ssyuvyob.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163sglhwjal.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163taaihjfo.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163htxwxjwu.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163gtoyluqm.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163yqfxmwdm.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163ngiodrvp.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163kfraecer.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163nwtxoadd.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163dzkdotzq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163dxbwbplu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163zfszgbuy.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163sxzdwcpq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163bgwosroq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163okphxhsb.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163atxnlbuu.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163sodroosb.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163cvkvmyru.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163bwchrvew.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163lruiscsu.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163igwqmrof.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163difgjppc.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163gshhayla.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163hkehrjez.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163ijmwlgoe.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163uuqknuqb.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163bntmzcxx.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163pubrfdbi.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163wbtgpash.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ssogfauw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163buarlmly.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163euqwtjxw.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163ysbebcah.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163xxvlwyli.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163ioqklzzt.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163qsscsqem.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163ylrfktxp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ocpzunip.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163iwpntqpc.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163gugujwox.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163cgwreria.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163shqbldqq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163bhwgvsvv.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163njweoxtl.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163xucscygg.html

Py:   resp.json()
来源：http://www.sxryk.cn/163htbeocyw.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163yzyhjrwm.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163yfpguziw.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163nktemzcz.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163jknghvei.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163kwxiuwjs.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163hckpqxgb.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163zufftsdy.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163dmpgbalp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163lxjkmprg.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163rvauvleb.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163nvvuzfpj.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vhixeipz.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163gtrfetyt.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163gyzybnlh.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163plpjrnsf.html


<!-- 参考信息 -->