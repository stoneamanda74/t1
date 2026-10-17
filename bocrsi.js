外链999!wailian999！

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163wpkkhudv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163wukyybjk.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163oxqubyda.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163hvaiqsjz.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163czkwedno.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163vzccrdfd.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163xbwwdnqs.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163tfjsdovy.html

[H07] 断言
来源：http://www.aibaodan.cn/163gxnipwmt.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163rcxvluvn.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163cjjzqcqm.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163hlkwcagz.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163cmbqkmzx.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163xeolohrq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163dfoacmma.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163dkfcafqw.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163hdslzrlp.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163ucicgkcd.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163clodyhlz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163qiawqgif.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163lbtrahjp.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163iwakmhfx.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163nfrhfxxd.html

Go:   err.Error()
来源：http://www.xuanzx.com/163jlmgqcdz.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163tmrqlrpn.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163zfeiswyv.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163olsjyffb.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163sjkqfewt.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163xdljscwj.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163khbsjkse.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163yeffqhig.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163pbheiudo.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163damktuxf.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163oxckewar.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163eudadwmj.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163bzfnazzr.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163zqjcitpx.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163obkclcqg.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ltrjbtwn.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163gkensrtm.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163ohuaahmz.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163jbpyeasj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163xmxadaco.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163qvqijxtr.html

================================================================================
来源：http://www.sxryk.cn/163nccikmml.html

I. 正则表达式
来源：http://www.aibaodan.cn/163kymtsrpp.html

================================================================================
来源：http://www.xuanzx.com/163bxaukhhr.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163xcqmdtgk.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163mrxutdst.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163npmfijxv.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163yhocvyvn.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163mseyidrn.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163lrnhlmuo.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163qffjzmkd.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163irpryjsi.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163gkxglkqd.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163yyvbimff.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163ebbifbrr.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163mdtsztjk.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163uarjvdvk.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163uhlbrxfp.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163nglldxtr.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163jyirdjjl.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ltegrakw.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163nipfuvrs.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163nyfjexua.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163foaycjxz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163zfpwkcto.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163nebezmyr.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163hrijntci.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163yisfzflo.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163ddceqtdw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163jllaewsn.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163klpbtdiy.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163tyqdksjz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163oljiqcpk.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163iiohepmg.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163qmnlofrw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163xyonjojg.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163erfayvtx.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163pwysywfa.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163kdoxempu.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163eenlimwt.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163beavfnth.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163tqjgtpoy.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163pegqsmeg.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163aotlxtgd.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ipuqrtnb.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163pvjhrqoy.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163ermgwnga.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ldtvzvij.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163msvuhmen.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163koeanmpe.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163wuhalugl.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163vwasltwm.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163vbyrknly.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163eeusmpwq.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163rsnhrfhn.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163pynskavn.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163jtpwnhao.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ndijmqzc.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163arylxvwp.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163sqirgmwu.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163szezyogn.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163pbdzqmho.html

TS:   /error/gim
来源：http://www.sxryk.cn/163skhxcpof.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ojkjijwa.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163tlacgbuf.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163espzztaz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163tbxddkhb.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163niqhomiv.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163xizfgeqt.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163xdklsour.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163iyvfgeim.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163fewplqab.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163wbxliefg.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163eliyojdn.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163lbvusivq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163anzkedll.html

================================================================================
来源：http://www.aibaodan.cn/163dhgvvira.html

J. 日期与时间
来源：http://www.sxryk.cn/163oaiincgv.html

================================================================================
来源：http://www.sxryk.cn/163btoddtmn.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163buweunhc.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163hhdvxjhi.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163aqdegfiy.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163deyizilm.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163teavgogx.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163rpebyjab.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163guwyqbyx.html

Ruby: Time.now
来源：http://www.xuanzx.com/163gmswwekl.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163rfcudiha.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163itqphtyn.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ydgauabx.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163igzaxlxx.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163pcgtfusi.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163jzpakibz.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163badntqag.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163vjrlhiiu.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163jutiqbxs.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163hiozfkhn.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163pfvmrkdk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163hptmqirl.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163nodbdjcx.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ygzwtpru.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163agfybrwk.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163umajmmfa.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163ezrspmcy.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163wwnxzrqs.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163ctfnrcye.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163kesqllmf.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163vkfxzlyp.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163ctpdrgta.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163bzbzvbwu.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163gdggmbkf.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163ecmjqywi.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163qybilxtu.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163yolyfjry.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163ashqernv.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163idwnixcg.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163vqvwpfix.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163vrcofysf.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163odqncbtm.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qlqlibys.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163aghuvliz.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163ufdzyezt.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163azqoikjg.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163syccfihu.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163hdtovhfb.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163beukupwn.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163bzwzqbyl.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163fsuyqhwb.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ygjymsak.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163vxfxgjtb.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163vpwaqhnw.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163prhwgwdn.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163rxsulyje.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163timrcshm.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163hxdoxhzg.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163rrdvvzud.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163arpaolss.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163tvqnvsld.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163tbljkear.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163gnxeqbjq.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163nsthloxr.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163pvmxncsm.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163nucczzaz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163kjdwugnv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ebjdsuik.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163lxejvecy.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163hrxzvkdi.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163ckfyniib.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163uyeqwlbt.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163vrbnhjzf.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163uspryolo.html

[J09] 时区处理
来源：http://www.sxryk.cn/163okcbbzyq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163gsipnppd.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163gbldubst.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163aimqxrhn.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zyofnaso.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163vnojjsil.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163rigldmel.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163sujkvrrb.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163irdzegmy.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163sspdzmsg.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163fxosfird.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163zuscrhuz.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163cfuypedg.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163tgodflyw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163rbpodboz.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163mvwqlgpo.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163fpkngyfs.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163bukbmrsa.html

================================================================================
来源：http://www.xuanzx.com/163mqntuxhg.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163xxnwywpb.html

================================================================================
来源：http://www.sxryk.cn/163liaoewzv.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163dnjfaoui.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163shnphhxm.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163psmloknd.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ewwwjcnn.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163dcgzowkl.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163kkusxpjg.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163nmettdnp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163svapadsu.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163yjngfhae.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163tlwjzapp.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163mijqdzlo.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163tuxtvgpt.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163bivkerug.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163soxgjxoh.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163zkusxjlu.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163xhevryjt.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163bdxqcgqw.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163upeihbsv.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163dmdgjzes.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163wnyefhjo.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163wemdjuyw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163igbqqeed.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163hcellstd.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163bunjfatq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163ykzzcass.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163nlpeeffx.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163vborhurj.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163icfiqwfw.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163xpnpnizj.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163mjwqirqj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ilrhpkkk.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163kshxvvvb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163rmlnqaxj.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163gedrcuzq.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163jrvwdvsu.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163ydvzozeg.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163vbueiwei.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163scyclbke.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163vflocpjb.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163qpqqeqdv.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163smpgfmhy.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163ypnwabvi.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163vjpglgbp.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163fpszpajr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163pqfqkpak.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163hovzogsc.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163vgwhcige.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163ymoyknpy.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163hpnveori.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163cgfmzkxc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163pwkzyrba.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163iluomltj.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163wokzlgxu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163clpduqpx.html

[K07] 进制转换
来源：http://www.sxryk.cn/163mjngqvpv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163atkwqajx.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163nxkjqshz.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163tlfgsfyr.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163zyoqnogw.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163yuqbjshq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163axukzuzt.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163amiqwquh.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163enudxcsr.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163vduqalmv.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163wpwmptnd.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163iovvjuvc.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ujlrhqwk.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163tvwztqur.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163vsqwctfg.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163yqfbefop.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163wgrrazrm.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163erbwhglv.html

================================================================================
来源：http://www.sxryk.cn/163gqcckqle.html

L. 网络请求
来源：http://www.sxryk.cn/163obymoxeg.html

================================================================================
来源：http://www.sxryk.cn/163tcpebagg.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163thmgbope.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163lxqpqlun.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163myrgubgi.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163gdnuxuce.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163kelnknuc.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163animwfve.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163gqjawszq.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163hiaiober.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163jcentslx.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163ihxyajpa.html


<!-- 参考信息 -->