外链999!wailian999！

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163qvfjlvki.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163zgnonpvn.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ydkbqcth.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163tstswnor.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163ycjbuchl.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163wddvxecf.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163xhwqboiw.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163wucifkdi.html

[A14] 注释写法
来源：http://www.sxryk.cn/163uydtnbqo.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163cvpgulsi.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163vvmerjqw.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163nyhzymtn.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163kfxiawuo.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163uqhrzcbg.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163nvtatkmg.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163ebcesfnw.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163vosrrmks.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163hlotojuz.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163onshbetx.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163eihmjvxn.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163ekcnaiab.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163jqjkaalf.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163yyyjmewl.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163dnbqulkp.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163vwwdyesx.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163mmnjdymq.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163duhxdgms.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163ryteygqk.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163mmepdkyi.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163yplxodxv.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163fpfldzbz.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163kcadnrvo.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163dkotjdta.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163tuislgvw.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163ksetllin.html

[A17] 位运算
来源：http://www.aibaodan.cn/163ermvthcd.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163urbyvfle.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163hpnhplew.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163cniharpv.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163dvlujptf.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ubxdokvo.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163lfktivci.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163xvhminru.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nmzxkkpi.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163daztuldg.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163rrlytwti.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163fktjkhuc.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163auehwqya.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163qjewhwwa.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163pfjpdmhy.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163ytaxnceq.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163bonmfpxj.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163ddoycgdo.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163mcopwrxe.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163uvajljlh.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163wyaislww.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163xsbrefrz.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163yzpzjnng.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163ldycmmyx.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163douwbthi.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163jrukhxag.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163azpnyhiq.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163qlrmhuty.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163lhbxkyju.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163elguuarm.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163iluvoqss.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163xlznzazy.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163dgotkgct.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163zuvshxkf.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163fvgbuzzn.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163zoaalzps.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163zkojympn.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163msyfprmh.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163fkunsiul.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163shjyupjr.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163qjjqrpin.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163akwryujd.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163xzoyeier.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163soeeayjd.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163vpiyonob.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163unzcrmmz.html

Py:   len(s)
来源：http://www.aibaodan.cn/163pqlpgfsw.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163yfoocxrd.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163bvfzxuwx.html

TS:   s.length
来源：http://www.xuanzx.com/163hhxfjhux.html

Java: s.length()
来源：http://www.xuanzx.com/163wualipxv.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163ujcsfhbu.html

Ruby: s.length
来源：http://www.aibaodan.cn/163cijvheid.html

C#:   s.Length
来源：http://www.aibaodan.cn/163gzivtrxt.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163ptecysuh.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163hbvwhmta.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163rpvqmoxu.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163risifszt.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163uevkzila.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ryoedlxz.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163anbmkpue.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163imdiyjmi.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163vkabhcfy.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163hsvuexqw.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163bzigfhqu.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163gvbxvxuf.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163rlglgwfd.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163tdeurnlp.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163nfqnacot.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163hworvfgw.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163ocsndeln.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163pibxpgdd.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163jtlxhroy.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163zwvpwbtq.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163eijccdyy.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163nhywigzo.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163zqmwysya.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163tdtsykjp.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163fvwebvyl.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163qbcdneok.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163spbsnvar.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163vgjzauos.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163cdorlqlv.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163hhdjbyjs.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163wpxpquxd.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163awlejxhy.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163ncnvfutz.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163eayzybwx.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163scprynww.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163fmpczdhn.html

================================================================================
来源：http://www.xuanzx.com/163ohmklrut.html

B. 流程控制
来源：http://www.aibaodan.cn/163lqeeatjv.html

================================================================================
来源：http://www.xuanzx.com/163zfrmwlxx.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163byglekus.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163icfryjgh.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163svwcwnew.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163emjyhhve.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163soremtic.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xgdnmkbi.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163fhuefpqf.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163spviusop.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wumpvpui.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163qrhczybh.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163eszpjwtt.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163kglqzopz.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163tirgqnqt.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163pvfwwpzs.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163teqhnrxu.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163enzxzllt.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163ngjfuzjq.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qplmpwaz.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163piuicton.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163rptjdfsj.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163pwtpvile.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163mkanldff.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163xjbdrtqt.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163zwafrqam.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163vycsptxo.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163lpwqatpz.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163lkljiflh.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163efzpczxn.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163tdptomrz.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163tyuzqyyi.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163kypnxxdi.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163aspaddki.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163sachhewr.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163tqmlsaqa.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163iwaslscc.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163hcwjxmye.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163phdefvwj.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163zymrejja.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163bkbkolhd.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163jeiruxnu.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163haptrswm.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163ryxjcuee.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163kqpdngrl.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163jmfdeiey.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163guexdcyf.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163zvtkolhf.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163vupcbece.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163ohajmicw.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163gjxoklzm.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163vwdsciea.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163xxqtdwje.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163vlhqzdwx.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163itxohdod.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163bxuwxmeq.html

[B07] while 循环
来源：http://www.xuanzx.com/163fvygpgwz.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163fyqlsyrx.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163nyhnnjto.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fkytmebh.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nmkrwvwv.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qdnfsvpw.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163yzuycueh.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163rbndknkp.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163gwuwtiod.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163irclxrbf.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163wdrqxhvd.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163iytlppdt.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163rzwwefvj.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vlgikeni.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163pxfcpxlf.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163iweqbgyq.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163oqrldvhc.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163iecfzxsp.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163smyjombz.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163idyhaiui.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163rpglamwz.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163cslltngt.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163oneruauu.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tjgiuoen.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163yzbufzds.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163yshewmgw.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163slwnwprv.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163iwjqmkrx.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163nwuulqge.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163rninkjxy.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163ohvgaeaa.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163sczfwuie.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163pobnkdfy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163znkgtrij.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163yknmombg.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163wksmbvnj.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163kgmhddfm.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163uemnzitm.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ynsgqfwt.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163tviiflel.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163nxltwtmo.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163sgkwkdqc.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163dpqytpnb.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163sepgsnvo.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163jpoqohhu.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163lvbysmrg.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163odtompvb.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163hjrvlmmq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163dyjpqtky.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163nxtiziwu.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163qgphstkb.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163gxxbefbn.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163kdnzyiov.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163nbmwdhux.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163tmqhzqld.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163vwgxqgzo.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163qqhiyymu.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ricqwdwv.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163xrpkunjg.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163fmcrldsi.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163yecfxzlc.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163nzdukdlq.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163ewbnbhpy.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163srvdfcpl.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163bbmerlfm.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163vodnobnx.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163gugjmfwq.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163mjvkhcsl.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163vrvzvzlf.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163bfcsvbdx.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163sfjhxrbn.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163zyrsjjah.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163ghnooyrx.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163rxzhkhzq.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163miqovzzs.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163nuvviicg.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163njxzmllq.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163kenvfxsx.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163aydpjypx.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163ukhoaklr.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163xxwweykh.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163mnswtyoi.html

Py:   if not data: return
来源：http://www.sxryk.cn/163bhkprcvz.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163osecjwxo.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163bqqdffum.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163usjxnnrj.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163jbgkgnue.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163dvxykkag.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ksadqfyd.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163grygqovi.html

================================================================================
来源：http://www.xuanzx.com/163aodyfukd.html

C. 函数与作用域
来源：http://www.xuanzx.com/163oprswpsq.html

================================================================================
来源：http://www.aibaodan.cn/163jegstxyo.html

[C01] 定义函数
来源：http://www.xuanzx.com/163tskghqls.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163jhphjjuk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163albtzaxl.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ddmvlchv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163vjmndpok.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163thcoouze.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163hramggnj.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163ejxppqeh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163plhtgyry.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163mlvlbmnh.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163wfnnfcfd.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163fkzwihji.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163jxpsgxer.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163yrroroep.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163lcseyfyc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163vofjiqez.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163ehbxmuvo.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163pfbzdpps.html

[C03] 可变参数
来源：http://www.xuanzx.com/163woomqkvr.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163dqtjphgg.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163bmgyjsyy.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163fuhfndrq.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163hygjcnhp.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163rnphkndj.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163frkhrcqb.html


<!-- 参考信息 -->