外链999!wailian999！

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163bbsngkjs.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163slylnwvp.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163jgmofjww.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163eblkmlai.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163kkhqxgbm.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163ekztgvtt.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163gigtgini.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163hbatlryv.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163puhzbewg.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163sxdzrswe.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163rzyhcmbj.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163njnipesm.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163nliryxcq.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163nfrgzyyc.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163wytgweii.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163kifghhqp.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163miqvuvat.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163imxnziye.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163lyiofgmd.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163crrokupj.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163ppyelcml.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163smpolram.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163uyjbtzmq.html

[A17] 位运算
来源：http://www.xuanzx.com/163cksqsuin.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ilnxmtcc.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163zfbqmlwl.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163themffpm.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163plbojcjr.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nyfalwut.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dtlmekhb.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163rihguyao.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ifzhjarm.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163gryftdwi.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163jbbynjhn.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163snykssvv.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163ulzgdink.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163byphzbkg.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163qssnthqo.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163yhkpohqu.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163wkwcvalu.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163rlalrvtl.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163kwxzxjag.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163qfcaimcg.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163rtrafpva.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163cqdsfbgh.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163vragqrvb.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163jpxhunfg.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163voxcnolz.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163dlyypcdx.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163ytqfdoni.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163qgzqswsi.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163jcvetmxd.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163ldtpptfd.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163lmchlqhc.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163phxhasow.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163kepuulgo.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163jskoyjcg.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163fihfupwb.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163vttwzvrd.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163ipuqtbia.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163jgpzclch.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163vgbuxxck.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163gorjiawx.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163isjpuhlg.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163glqzdfku.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163jfzjfmqd.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163gcojornx.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163auhihniw.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163lotqzcgu.html

Py:   len(s)
来源：http://www.aibaodan.cn/163rpamtrdr.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163fnbjgzvx.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163ccbhooqs.html

TS:   s.length
来源：http://www.aibaodan.cn/163kturraoe.html

Java: s.length()
来源：http://www.xuanzx.com/163vaaeogci.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163blgatkgy.html

Ruby: s.length
来源：http://www.aibaodan.cn/163zcwbvcvb.html

C#:   s.Length
来源：http://www.sxryk.cn/163edtihhlm.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163kbzdqdgv.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163bxjsqpib.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163sfrokaul.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163fayzmicv.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163yunblmik.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163nhwkewgn.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163tcbiothc.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163qvsvjrys.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163bybiaqks.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163usllgqzi.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163knhrefpn.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163axbblpjm.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163erdmnqms.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163frkkraqq.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163zalwrvdv.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163fftoboyt.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163evtjlxsx.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163tstseldu.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163zzpejuna.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163fzwlwydd.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163khtcoenw.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163dfkewvgs.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163hiatkyqu.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163gmfsxkdo.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163lkztnspw.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163uxyzqavp.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163scyhudct.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163xbhyxamz.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163zflpjlcc.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163kpwkgjms.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163hnvtkwbf.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163jucdzxxr.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163mlfvebxe.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163mevczvnx.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163nkepcyib.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163xyzzvyrl.html

================================================================================
来源：http://www.sxryk.cn/163jazeecgz.html

B. 流程控制
来源：http://www.aibaodan.cn/163mktisiwc.html

================================================================================
来源：http://www.sxryk.cn/163ikffpwva.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163djwtbfkv.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163indbfprs.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163gbdcvvpp.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163uenpqfad.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wuzwspka.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163pagxvjnf.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163vyadizol.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163vnvqtshj.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163nhylparg.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163cpubsrrh.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163qufqxtpt.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163aojnycti.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163phmzlorb.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163zouhmlkb.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163grmmlscq.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163odlynnqj.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163lnizwysf.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163oerchmhu.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163aykgeqlt.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163njawcxhi.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163jagbyfze.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163gweowlhs.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163qysckhfj.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163gkhxbgbe.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163hnxdjxlm.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163fedcqyss.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163moebnxaz.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163kekkgebb.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163sgkepywq.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163edaxrmlf.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163zcpzwcda.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163aonrfwgb.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163nkjeckwe.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163qomkssgb.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163lvnyreqt.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163yergtfmw.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163xfbemtvn.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163xksfvlvg.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163ncqtwgus.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163cyjjktwj.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163iscvlvjm.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163mghojgju.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163iknhsvpc.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163epuknbks.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163lkxdmydj.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163loikrvsw.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163nbjtusbk.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163ciyuylrd.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163wyrjcepr.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ldqcyjds.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163qpehkgyu.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163dkcfxwis.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163nvhggruy.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163gzfzefiq.html

[B07] while 循环
来源：http://www.aibaodan.cn/163ztkuuvoa.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163aqrgpref.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163xagllxqz.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zrhlmqvs.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qjmztdbu.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fqwuexcr.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163fmzvvqcw.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163ndgecuyu.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zvecyqiy.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163fnjrhdyd.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163uqvkclxo.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163svhlyllz.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163nysofeue.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163beznzqsw.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hhaiazub.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163edmepbzj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163nuhjojsp.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163dlqhsktm.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163ksmyzzha.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163cflwgxfp.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163tbvpgoke.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xnkicxbt.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163yejspuaj.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163igpusnug.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163qrgpqqdu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163akihkyus.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163nzetmllj.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163qwfbasfj.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163nvwwjuwf.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163pmygyrvm.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163wvdqxquu.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163drcirlhq.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163fhvpevuj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163dtzwvzdo.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163okccoorg.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163hkzhyhqn.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163rwabwfcj.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163jrhotpio.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163sackwwle.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163dcbcgolx.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163lgxcbono.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163yqqqwveg.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163mzsbdypb.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163zcyienwb.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163wanfeekm.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163eqoajths.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163arpkjcun.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163jbmhjzfg.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163dqyyffck.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163gadcrrqv.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vmuaqopb.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163toyktonr.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163upfnzeei.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163fafddoul.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163acpcmdqb.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163engooaqs.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163ddnduqkm.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163cgfnmekx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163mmwcbmvm.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163ygiddabz.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163vlffefwk.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163vjdnutmv.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163egisjeoi.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163mlzoyzvt.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163lvnfvcoj.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163hanukxbd.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163anzlokpa.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163xixpnfyf.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163dslpupxw.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163tprcytfd.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163tplbqgde.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163gtuwspsr.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163htjvqaib.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163mtckhdne.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163rxgtplon.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163hfwutide.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163fwsfuhel.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163lolyynqq.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163mglrvoko.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163fywynpsq.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163plfoloeg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163xhoenkos.html

Py:   if not data: return
来源：http://www.xuanzx.com/163fmjgqwjf.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163cqivvicd.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163wskjxkcv.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163cqjzaulp.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163dndkqdsp.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163imfdfgjq.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163sycnepqs.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163nedlmapo.html

================================================================================
来源：http://www.sxryk.cn/163sdlpuhpd.html

C. 函数与作用域
来源：http://www.xuanzx.com/163cjtsssqi.html

================================================================================
来源：http://www.xuanzx.com/163eojqpwdb.html

[C01] 定义函数
来源：http://www.xuanzx.com/163kyeainqe.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163dspjcnaw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hoilgmia.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163moqoaxei.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163gankraxy.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163scpkeadz.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163scotovze.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163xkssqwom.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163xcazcore.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163bryxnjho.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163kmjrqgty.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163suedxzdi.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163yoaofise.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163pfsmzxua.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163dmqghbrw.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163jbsxpubi.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163vydugufu.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163hdjmgnxs.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163dmozyvxx.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163wtfrzceu.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163nlrqhutw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163dqeqlmvn.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163lvwfsbhn.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163lmxdfnev.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163xuckhlpa.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ljwgqxwg.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163qcvigovf.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163jplrrzwk.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163vonavlfs.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163tzoeoqlt.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163ewyexpcr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163zfhpfqje.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163vkgdbkzh.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163hvvggeaz.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ijtyxfvl.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163yrgzwgcb.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163bvjncbnw.html


<!-- 参考信息 -->