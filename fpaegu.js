外链999!wailian999！

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163kzqublun.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163tlgofrkn.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163vrnwdjek.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163igtfggtl.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163qrwsvnei.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163mguhuqbk.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163mgfgbive.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163tebspulq.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ecodiacr.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163dvuyjfdq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163cctmqqnw.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163nuhiaruo.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163yxrtwjfn.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163lryzzcbk.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163lqsszcis.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163grrhjjns.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163ewzoipad.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163chcuiknq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163nueyxadq.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163pihdijgw.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163ovgmckrv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163goaqjbko.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163lqfbftzg.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163tcmatfmj.html

[H07] 断言
来源：http://www.aibaodan.cn/163eiqiysvp.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163zksjqcvw.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163uozywxlq.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163iudcwaol.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163eexzfcab.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163iqduujhs.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163nfmqchsb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163inhkfeyc.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163zgfbyrdq.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163wvpmmcrp.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163aukbqbmg.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163mxxiimah.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ysiazhuf.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163mkdqqtdx.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163kaqivfnv.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163tgukxjbw.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163fwjcywim.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163jzzlukkj.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163hdiwipzi.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163ecvffnvp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163keguojsn.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163gxriolfc.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163lidcouud.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163vlyusbdc.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163spzkuvmf.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163osepbetq.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163zwcmftpl.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163tgalfrul.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163vjsymrex.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163sirdcxrh.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163hgjznnrl.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163fyacxizj.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ppuqmecj.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ljtnhgxk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163vszjqqci.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163vxfmfscs.html

================================================================================
来源：http://www.sxryk.cn/163rzhbywbp.html

I. 正则表达式
来源：http://www.sxryk.cn/163pbedlgwc.html

================================================================================
来源：http://www.xuanzx.com/163hzfisapz.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163bxszdabz.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163uvmhzmiy.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163nfbqywsa.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163yqtyeypc.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163kskqefoq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163kowcdydh.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163inbyqyic.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163vbymrguy.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163wbzivhno.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163llxttpds.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163umemosjm.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163hflxuaek.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163yjwoxows.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163nfdlmyrk.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163kyapcays.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163pbpgevvr.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163cnnmolbq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163davzvzdu.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163hnulyyfd.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163pvfxmisr.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163xyrkdkfk.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163mgzjclli.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163jgbcomxu.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163workvqgz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163jbillkqo.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ebjjbybm.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163zuxtrdfi.html

[I04] 正则替换
来源：http://www.sxryk.cn/163slrcioft.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163qqoitpuu.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163vhsdjhol.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163sotorwbk.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163oaoltcpa.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163wvxhpnkg.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163gcgajtwp.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163vtxzgvhg.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163ghiayrnv.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163mtrmnrwq.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163ewvndmpo.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163dkzmvvlm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163rywccich.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ttuzzwgm.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163laeamtdy.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163ggxqiygl.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ohatclgf.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163pxfztcfd.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163pyiffsvq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ehltyzpk.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163zvdqsfvg.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163zdbfxkpc.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ufobwizc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163rrmdcwyn.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163frwpdobn.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163wfqkrzha.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163akcewvhv.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163bvujhfck.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163shugsryb.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163fcqnzwse.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163vizryfyw.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ydfnkcwc.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163pailkuaq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163phjmtaqb.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163zfefianm.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163kqdrfyyn.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163dzexfsqe.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163xjlcuwrp.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163xrlllbxf.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163cfulweoi.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163zvuzwtxr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163zfpwocbn.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163mnuvsufu.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163ssgaflza.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163httlwfti.html

================================================================================
来源：http://www.aibaodan.cn/163kiehtuyl.html

J. 日期与时间
来源：http://www.xuanzx.com/163bzaomvrj.html

================================================================================
来源：http://www.xuanzx.com/163xkuxtwyf.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163dwewhzkx.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163fnoptcay.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163wyeqfxmq.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163qowkomgc.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163uptqprzn.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ltfwiexf.html

Go:   time.Now()
来源：http://www.sxryk.cn/163wlihpisp.html

Ruby: Time.now
来源：http://www.xuanzx.com/163wbrdvyjn.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163jporadmx.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163limpirzl.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163cckbfhrk.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163kldupzsz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163oqqlmlaj.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163yacnaqdx.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163vsbhdlqq.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ysxkqqsd.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163rjfuxsgk.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163gleuadqx.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163gntvxyax.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163zqbbjlgc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ybrpinrk.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163pesdolax.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163uyfezivd.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163uoayhxam.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163uusmixpa.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163vsqzrvqa.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163cjapfphp.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163mohaioee.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ftstsowc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163fcyjdjyk.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163plrjkcxg.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163ikcfrmsy.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163eyalrrjg.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163wtokykrl.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163uekitlkn.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163kuwlwohb.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163xjihnxkd.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163azzjuita.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163hjotlqxx.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163pzlwkzzp.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163eazgzukf.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163covczaum.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163qlleljgf.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163bfxmwkew.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163vudxgsbq.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163wsjreqty.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163qclxnewx.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163vhwfsbvx.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163hpmoomnd.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163pvpcxwif.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163rzfhuoqx.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163iphgsecq.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163yqlyscen.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163efyvljgo.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163ecvhscaj.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163bcvptnsh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ueudwrbg.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163rsecicjf.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163gbpnhmsd.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163bhzjcwnf.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163rswkpkvz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163yxwliupa.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163cwvpphcx.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163qosmtfol.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163sbceggoa.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163tquupurn.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163gfcnhhxq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163jsbqxqjt.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163xvotcnbl.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163lvnprrjh.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163wdoqiqbm.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163igarpkyp.html

[J09] 时区处理
来源：http://www.sxryk.cn/163ajctuemm.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163evmhlqeq.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163fsywuglb.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163qzkzfmac.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163haxuvcpq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163xggwwchb.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163czcvuafa.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163nukywfas.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163inwzlvod.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163dxwhtaqg.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163itqefnxk.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163cgisgtmy.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163jbbsldqj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163dlszcqkd.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163hqxmjjcg.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163qwzdztcc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ksgrxvjz.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163inmzenjj.html

================================================================================
来源：http://www.sxryk.cn/163lguiralb.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163acddepcu.html

================================================================================
来源：http://www.sxryk.cn/163aiincxnr.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163gnmalpji.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163kvxctxyu.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163mfnbvsuj.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163nxspqgnh.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163zyyvqzgl.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163mnecptyr.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163ddmvlqlk.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163kcsavclw.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163nlceonfs.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163kvkbvnnb.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163dxcxyfhj.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163wimbwygp.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163saiydlpg.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163oqixmhjr.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163smnhitin.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163rcvkjuaq.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163hwgcotvs.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163zfjhzywf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ijcrlqzj.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163pubscmrk.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163yfwrjnkc.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ayyolugg.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163qasxeqvt.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163yoezlpcv.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163hviafkxc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163qtjfatga.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163tristydd.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163phsulzqs.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163jkzwdfjk.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163bzpbkiwu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163pbsmpmpj.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163pagixerb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163dbjjwqyi.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163fzpzhktk.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163djkkfzkd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163tlzkgkdw.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163goimjjgz.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163cpzpukmu.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163erztkszk.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163xkvbhuya.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ramtemme.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163ctvkcbaq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163izrdhlme.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163dvcpfyew.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163bwdsyrln.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163rjehxdyu.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163zoqcengo.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163qndtshcm.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163yzqjbiyk.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163jonwgatx.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163uodfqcux.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163niokqaxd.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163zaokokjr.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163fglyyqja.html

[K07] 进制转换
来源：http://www.xuanzx.com/163nrpwaaeg.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163fvtaejpt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163pdyakpuf.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jvrycxiq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163rwtjrxip.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163idmlrogd.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163yjoenkxo.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163jycfduwz.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163sfzczsqn.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163qcmwsvyy.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163pbabaqcz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163eutelpdb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163qgnnlvpl.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163losxiynd.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163rjxhjced.html


<!-- 参考信息 -->