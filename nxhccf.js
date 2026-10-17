外链999!wailian999！

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163cgaelxpo.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163crjorlnw.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163ygszmjtg.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163axqzkubw.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163glezyusf.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163byjimqvw.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163ynyagelt.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163njyuoufo.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163tdenbuqq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163aqfchsiz.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163kyvhtzit.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163eqxkhpmm.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163fmqcucnr.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163yhktjgtg.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163oylvtmls.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163cszkpibv.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163jpaizhit.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163zizbvydk.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163hmihfbhe.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163zldwryco.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163afeoobaj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163wqzrfxum.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163mkrrhipp.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163flxzhelq.html

[H07] 断言
来源：http://www.sxryk.cn/163pgobwpwl.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163uccscxwv.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163dolwsqki.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163rmpwiqlb.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ixxfgtvo.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163lhxvhyjz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163jigvbepf.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163nshnebsf.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163dzqtrfwp.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163ocuuaxxy.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163tggtgbxh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163qwyswohi.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163hwawhtgg.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163izdcviur.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163ngwqcxln.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163iypwzamd.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ggjmgtsx.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163hkjjqfrs.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163oouxytty.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163mvqkeoow.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163mqhoydzx.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163qfnoxgkl.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163treznlxs.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163ujjrtcna.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163yglqkccq.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163udkuyngv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163slzfeibc.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163avctyekn.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163lndppqzg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163xskyautl.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163jepkuisv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163emcvlrjy.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163whphlqeq.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163bbkcfnsf.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163apikapgs.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163cfpfbczx.html

================================================================================
来源：http://www.sxryk.cn/163ggxirlts.html

I. 正则表达式
来源：http://www.aibaodan.cn/163tvljfaze.html

================================================================================
来源：http://www.aibaodan.cn/163etsbpova.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163jooptjzx.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163kcjetquw.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163orfowxuz.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163pmqmblsi.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163yftqyetw.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163hsxxisjr.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163qgrfckct.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163kgjdgfpd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163ttpjylqb.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163zohyxdrz.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163zjrbabpp.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163fcbavcyw.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163oclsvcrh.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163lsqgsevv.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ebrdxbty.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163sfdgidwg.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163hticqgem.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163bgagwnvm.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163byvvcnhr.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163yuoivfay.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163pawltogm.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163opnectuo.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163zvqtsoxy.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163tkyirjar.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163rrpgetdi.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163vuunhfcz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163uimnsjjo.html

[I04] 正则替换
来源：http://www.xuanzx.com/163zrispbsc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163cgwzuuhf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163znllczfe.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163shnrcenq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163yfcraips.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163ayfakdol.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163ohzvacrz.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163tzmvybez.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163vkvowvir.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163bavkqjrx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163sfowcqsf.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163odclodqi.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163kxarwgbb.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163otprmkxh.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163ctfzardt.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163oyzspytk.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ytevbgpa.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163qxvqlgzs.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163owjxjsdq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163hfdnvvgy.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163cdakusgg.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163lynyideo.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163lntciqwi.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163eqcwogpo.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163cqjstgol.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163avghezyu.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163hejfsibq.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163jhlsusis.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163bvsfohda.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163jfhpleyd.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163hxljwljn.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163pyhiifyg.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163sszpihrh.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163scaxrzui.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163muwrkiet.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163jmurstec.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163mfevyejy.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163bsqyfliz.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163sbdpjmfj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ukegfuey.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163zrojjqyy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163pczgxlos.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163jxpqqwfe.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163iublsykd.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163kzwmyyoq.html

================================================================================
来源：http://www.sxryk.cn/163kcfwujkq.html

J. 日期与时间
来源：http://www.aibaodan.cn/163rletftza.html

================================================================================
来源：http://www.aibaodan.cn/163mrsrmtiq.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163bmxyqwgu.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163rcnfrqzq.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163csnutlsz.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163lxgbtfoc.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163djafxtco.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163juscbveo.html

Go:   time.Now()
来源：http://www.xuanzx.com/163yhrihuxy.html

Ruby: Time.now
来源：http://www.sxryk.cn/163qyhrbovl.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163xzteczhx.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163lgcvyclc.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163liamaojh.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163grvoypcs.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163jozxgizg.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163catahuum.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163avrowaxa.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163misreloz.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ebbydylv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163rgeygzij.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163gyxgajkf.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163lqseeoxu.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163nxcllzqm.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ljczzdlb.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163cmitikas.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163pwisvrcy.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163lyjegaqy.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163elcflcvo.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163ryycbzup.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163lxzxnbxl.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163asmgpdma.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163sncyyvak.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163jkwtkndn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163layfilcx.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163rvucipul.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163llhapeqn.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163lpdfbtis.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163gudawhoq.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163fxyubkrs.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163kxkfkruz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163uhunbzth.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ybuthodf.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qforljtr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163nanmfset.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163nejfcbcv.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163ibeaobnx.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163tkdcxrmd.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163sqgharlz.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163klzmbscx.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ryoweukp.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163zhqhjvha.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163klzolnmr.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ppkppurk.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163ksrmgtqx.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163peaabhwx.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163mcvakgcy.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163xnsoscjy.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163tboicjen.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163wkkqnxoc.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163kzxhzcav.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163uqmlnnqy.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163yajagpui.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ssaxqdnp.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163anylrudn.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163vsrzqatr.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163cdfbhyow.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163iybsqzxf.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163amqagbha.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163qmpgxukq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163pzybttpn.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163kwirgiee.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163jrrycalv.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163zcdhlucc.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163owyncgyd.html

[J09] 时区处理
来源：http://www.xuanzx.com/163utpothbi.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ztrgeikk.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163upiszsgm.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163jumersnl.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163vdwfvkzb.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163bnqonnyd.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163wgutpsbt.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163tvhizcnk.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163pcbcatvp.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163xoewlwdx.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163pwqahgsv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163yvnvvmah.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163uechxdrn.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163lsgylyhq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163eejcklkh.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163oblniftj.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163kapvcfmu.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163lxflgsfc.html

================================================================================
来源：http://www.xuanzx.com/163csuicubl.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163pazfmoue.html

================================================================================
来源：http://www.xuanzx.com/163xhuyytzy.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163xzphqbbg.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163wmucxqrb.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163uihllkic.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163omyedicu.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163uzodryee.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163szovpgtv.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163nvjipzni.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163opcyfzsj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163dmogkevq.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163smxxkvtw.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163vkmjpkne.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163aodoawgf.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163htziltot.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163gdpwspju.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163orlnirtk.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ogjweiis.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163zcppcmvd.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163ahnqnxqi.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163twvbxuxw.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163wrgppkap.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ebgaxpqs.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163vdhabqtz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163gcnufznu.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163emggglqt.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163hehwqgdl.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163agdvebfa.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163aunbmmwt.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163pvbdpifz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163sklhneip.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163kpbtraul.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163jokkgykw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163epmpirby.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163uhzqdvys.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163nkcanhwr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163cguvdesk.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163cztyjvke.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163ceqbqqdq.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163mpijvegb.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163qogqoiva.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ufejwgfb.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163cmjtoitz.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163dtijqfuz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163qygngsov.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163iyfggwjy.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163vdarobiy.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163gpddzxjy.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163ublhyzlj.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163rqkwgjoz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163zkulkudg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163mpomvfmy.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163cracapmm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163yezynzhe.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163svfcybrr.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163avygklah.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163rakblirc.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163thusjbsm.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163fcsbanae.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163bddfhrbk.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163vrhfxdfq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163ehionryz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163gcbyjbzb.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163pgmaydlc.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163lqqqsezh.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163pqexxhnu.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163ccrqidjo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163ofnvzyqb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163qhkgqusd.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163qiqiejxa.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163wgfbwivk.html


<!-- 参考信息 -->