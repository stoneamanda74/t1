外链999!wailian999！

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ralnkiis.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ibakkhrz.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163tubfknaj.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163yvlfbcqw.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163tkbtjtiw.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163pzllsgxk.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163bqkprjvz.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163jjobuswh.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163zjnmjukj.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163wkblneub.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163empggchy.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163nartaqwh.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163htksowmz.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163yrbbvqqt.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163qqlypwvw.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163eoqbmjvi.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163woijqkzs.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163yvimjvtg.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163piunyodp.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163owzocmds.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163lsomynll.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163qzalxmyh.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163xmalxvsg.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163gapuinhl.html

[H07] 断言
来源：http://www.xuanzx.com/163touigxrr.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163zqfgtiql.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163gheatsfm.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163asruwlmy.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163rmigmchl.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ksqbtsyo.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163xztisvrk.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163shjlgvif.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163hqnqmobq.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163vbahkhal.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163nolwusqx.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163sxfxoywc.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163autveqxf.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163cqwwtsgs.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163ewpmzpfk.html

Go:   err.Error()
来源：http://www.sxryk.cn/163mihwthxp.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163gmxepqys.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163azpsieaq.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163kqavngwd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163xpdcrxgn.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163ytonpict.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163dynafofp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163nybokfhm.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ijjrdncq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163djcmyttx.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163gayiwyxw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163givqspmh.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163fximlewd.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163opwefsoh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163viscklyg.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ksrqqcgk.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163slqybwva.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163xewunnii.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163tbarsean.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163razsarqf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163evtximsg.html

================================================================================
来源：http://www.aibaodan.cn/163nvswwagl.html

I. 正则表达式
来源：http://www.aibaodan.cn/163lytycihb.html

================================================================================
来源：http://www.aibaodan.cn/163mfawaxdl.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163scmbmmqx.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163szmacyot.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163mmuhrytp.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163bmopvbdt.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163iojpmcfb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163glghkcpz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163bbrdpefy.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163myweiiee.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163cffrrnln.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163rxsezovp.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163mrnjtnkx.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163byxuhumj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163whfchvjs.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163daikzbod.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163amqajmir.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163raeyftrx.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163akydfxsi.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163hvyecjuu.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163nxsszort.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163ipfhwrja.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163ppjwjblt.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163gwoclyvi.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163eqfuaztf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163wfvsohrs.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163dkdgvvtd.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163ncwgpspa.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163lgqgeavz.html

[I04] 正则替换
来源：http://www.sxryk.cn/163yajxwuzt.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163oggksvtz.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ichncdqd.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163cnubtljj.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163jeceqbim.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163vpjpufyq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163gjubnnzp.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163ijhsrbul.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163ldjdvplq.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163tuulxtol.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163iphdgznc.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ygjawjyy.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qwrrjgio.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163nkbxloxq.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163tkcclajm.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163ulqwmdwm.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163pmeicpno.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163ygscfonq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ifjuligw.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163dfzotifj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163oehqehox.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163gkcpspoh.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163eyztifqv.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163uqvppvwi.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163maxroxrj.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163qzfxdqrk.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163hugjbrla.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163wahjkyus.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163tdngbnep.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163fdknztkj.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163dkbdrtoz.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ystcvllf.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163xqparayc.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163vpgcpkhr.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163aggnsgfe.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163isisfask.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163sagpczmb.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163fsithcnq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163vhbjprpi.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163miqqqlke.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163axkydvpo.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163omwuynhq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163zplmkszg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163iqosgzei.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163kqvkkbjo.html

================================================================================
来源：http://www.aibaodan.cn/163aspdexmc.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ubdunkwn.html

================================================================================
来源：http://www.xuanzx.com/163xkgvfmks.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163ridttcwg.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163pehepjbj.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163iiortfhe.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163wupwnavt.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163dbbovlph.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163kdocnqwh.html

Go:   time.Now()
来源：http://www.xuanzx.com/163gaorvhtv.html

Ruby: Time.now
来源：http://www.xuanzx.com/163xzjziliv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163skrjxice.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163zukyyhyw.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163azduywis.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163jxzbnkop.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163qjspqvkv.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163ksfldqrv.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163dxgifkmr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163efrbbvto.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163pydneckt.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163ortljucx.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163ubjutumw.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163wjcemavi.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163eblinems.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ysqswtas.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163zleosgai.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163cahxercw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163hwfdcsmb.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163oashcvxf.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163azltlacd.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ihlcbcdc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163iogqlfbe.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163nujjsvdr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163bihgrhku.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163ituxpvon.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163giipopnw.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163xtozzejb.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163cvuhqhgs.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163xfixxxll.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163kditnxaz.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163nldgqreo.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163qknffrcs.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163eljvzvnn.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163zkvhryvw.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163snvqjbmh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163soiztcdr.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163vaaachyb.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163hfydunkm.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163lfgkudmy.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163fmkdraby.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163todafetw.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163mvuyqtnn.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163qtaufhrx.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163rgteazjr.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163flbhneeo.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163pwtnjpqm.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163zxhsrdic.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163gtnuhmtu.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163pxeqyzbd.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163nvjdwyge.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163sfzakjcu.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ncjvkiis.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163zuzcpnlg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163evrdvfob.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163finxehqh.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163utndazny.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ogoaeaqc.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163ypvdlzyn.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163dclznwpa.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163twfwgien.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163avqstfwp.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163uwixfwru.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163dpobjwdb.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163josfovjd.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163hgcorzrp.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163qpxqoiom.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163hpvtjkxt.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163inrnudhg.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ppswaiog.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163nwzfofva.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163txvnfpvs.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163dpzejcdb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163gsyetnmq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163uycfcbhs.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163vpgptssr.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163rdfhtfez.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163aofdajsr.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163umxpetvy.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163topjucsh.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163vetucgws.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163sdnylmoy.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163shurqlwq.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163nxvyoppn.html

================================================================================
来源：http://www.xuanzx.com/163ytxeqijk.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163yubokvdf.html

================================================================================
来源：http://www.sxryk.cn/163fpjpkugg.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163cgrbhefm.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163gtlryrhw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163jmcjnqnw.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163bdctzkui.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163vaffyqyu.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163kpnqftmp.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163znamtsum.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163yefenbvl.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163tccugkgr.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163cfqxcocb.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163rzvvhqwu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163xgujqkfu.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163xqxdsfgc.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163gckxbiel.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163mhhwsdok.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163hspejxtn.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163zmpjoijs.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163ijtlvsgg.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163uahaiasc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163fygrpcdt.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163iqusibxq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163vcyxlbpt.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163acfpxaze.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163kbzntrhw.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163ekkaoskp.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163hnnpnmqm.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163pmbciskv.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163rzfreukz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163okcdszlp.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163amvznllc.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163rsabmhls.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163quspsxat.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163uwmjyiib.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163darpleqc.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163bshkdfyc.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163mljrgyuu.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163gzjpuyxf.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163kjnrnjqb.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163gmuuljll.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163zjywxyka.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163qtisduio.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163kcgkzody.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163hrfogzxe.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163frwczsvc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163iknkucbr.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163kpyrnoty.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163vxazsvxu.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163hkxluqmf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163jehhpbsr.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163igzzddtx.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163prnvkwqh.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163hqiwemht.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163kxzqgmdt.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163sgmvxail.html

[K07] 进制转换
来源：http://www.sxryk.cn/163iwvoumcp.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163rtpkwphq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163yqtkzmyr.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ojoxnkbr.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163eepbjyvm.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163vhyljhdf.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163jfwxnnla.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163znpgtqkb.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163fcqyghsv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163kwxvvohq.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163qkkhbtyv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163yrsvbucz.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163jzcljeqc.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ufeugodq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163rbbfgrkb.html


<!-- 参考信息 -->