外链999!wailian999！

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163cxkdlckj.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163eleixfup.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163orneoegh.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ixmqtzvn.html

[A14] 注释写法
来源：http://www.xuanzx.com/163ccxmbult.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163apxxvrme.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163sqwofgfm.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163xnndydww.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163gxwiazac.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163uoerrods.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163skaejgrl.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163gxxtishg.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163nzhifzfo.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163lqnoopvq.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163ipqyngla.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163owdyyefw.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163poyejktn.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163nezslybl.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163imbvnjzp.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163lxjbhklk.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163osvaztdo.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163whfabocf.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163rkipfzvb.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163rfofvpir.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163ayufehoc.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163mxufldff.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163yfvmasws.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163bhfaawuf.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163tzdxaqye.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163ufduevko.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163dcxjneju.html

[A17] 位运算
来源：http://www.xuanzx.com/163ezlprpyq.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163lurxsabg.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163vburhmlz.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vdqdyjlv.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163wwknwjza.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163sfpzeuvj.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163dxensqgh.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163gqlkyesq.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163pisftnma.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163zhjwwyrh.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163wgknybeo.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163gosqduyo.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163yywopghh.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163zroiiqnq.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163tblitbln.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163nkuhysev.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163ktdpsxes.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163jibagbsx.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163vbvjjgkv.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163cptuwotp.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163ukspzynw.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163fgynzbfj.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163eabulaej.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163sydlaptz.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163kzxupxmq.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163uoyogobu.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163hwxjdbwi.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163mruxgjqe.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163igtlfcno.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163fufznekp.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163kbxtirxr.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163debhmssm.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163ijzvwhnh.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163gbkzgrwu.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163vdfibqtj.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163rviphnev.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163alrkyiyd.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163wycajloc.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163brritlvz.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163ehpnoypa.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163mnkopvst.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163klzilywu.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163kmjtbzak.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163erlcnvjl.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163cthvhvqa.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163diygeoui.html

Py:   len(s)
来源：http://www.aibaodan.cn/163yevtmrdr.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163wuegylcq.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163xhdmglqm.html

TS:   s.length
来源：http://www.aibaodan.cn/163ogkigqck.html

Java: s.length()
来源：http://www.sxryk.cn/163zezouvuk.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163yqhslytw.html

Ruby: s.length
来源：http://www.sxryk.cn/163fhrqeiuf.html

C#:   s.Length
来源：http://www.sxryk.cn/163xdsvnygn.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163ptxqrqbw.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163tfghcpzw.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163sileckll.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163sduvpltf.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ldvsrqzl.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163peyzjhpj.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163gazdzfqx.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163whevrulk.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163ebfbynrj.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163haxryott.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163lkpilqqn.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163pekkpnwn.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ppkuqgiv.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163tyivrjpt.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163qucdfjub.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163vuokyuaf.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163fphokixs.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163ytoztkws.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163lrdshbha.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163gewogevk.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163ubjqbvea.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163sansaurl.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ahtoiyfl.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163rhtfjlpn.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163vauzycfe.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163soqsxlkt.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163omljkclw.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163hmxkgbel.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163wbygqtsf.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163xuiazody.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163owwrnpyt.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163akxqpatr.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163hbzlkzqb.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163lxkrrslc.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163gbmgkcan.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163ennsmzmb.html

================================================================================
来源：http://www.aibaodan.cn/163osfbqeax.html

B. 流程控制
来源：http://www.sxryk.cn/163nzzcgrak.html

================================================================================
来源：http://www.aibaodan.cn/163aazciszo.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163uqkaneas.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163ymrppmsy.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163jlzxjjce.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163mfpqypkl.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163jdhhnwjf.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163onfcdnbe.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163pgrpwkfk.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163jcquagny.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163neqrvdgj.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163niromicw.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163whczdgzm.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163ubqbjmkz.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163efkapqnn.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hobkjzcg.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163regqmide.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163tkywpqtk.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163vpkghzce.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163kdfubhhf.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163dxdaahwu.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163myervfkq.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163mhrsolak.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163foiznyvj.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ukqkluio.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163qpcbbeyr.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163sgkmktpe.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163kiuwpyrw.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163xryssttn.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163pqzfuppp.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163uezbzoto.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163pkvunajp.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163hlnguclw.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163oivawgye.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163iwjhsljq.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163tfzdcyoz.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163khcrxjww.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163ekqzirqk.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163uqdoabiv.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163smzwcmqs.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163rxkozovn.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163rhnggwfo.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163boehknya.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163bxvtgbgo.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163utuehpor.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163dqawddnl.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163okrqzoka.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163inmujjez.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163cxbvojfq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163xrltdewx.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163gkcvugiz.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163cqfnokhj.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163rrajbzwo.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163mviyguvb.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163novzrlon.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163buqvnvhp.html

[B07] while 循环
来源：http://www.aibaodan.cn/163lnpjtnhg.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163uwvtnnvl.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163rtavlrbg.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163skpribch.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163bwtnkdcv.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tuoxgbyt.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163xruacxqe.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163eawklsul.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163lbxaopqs.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163qfbjoyvg.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163szglvhcz.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163zvgcqeyk.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zoacvdmd.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hhtaesct.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vrjkrphr.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163tlbgdnil.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ekxqxmvw.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wkxoprcl.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163thjcbdff.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163drtnqixp.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163thbzsytz.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vdmdwdyq.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ywvfrsew.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163tdlhuztv.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163mmkpwzlb.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163dfkjbvup.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163nekegzbw.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163arhycsgb.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163aznnclcd.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163lvqitcyo.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163ebezdgan.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163twzidsca.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163ycphnmuu.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163zxstlgfg.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163oeunorpz.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163ucrcdasu.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163eoaddkhd.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163lzfdrvdj.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163sifwolkg.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163qhbigrqq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163snazavuk.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163faeworlg.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163hbvzcdun.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163tvincwqj.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163wivfmihu.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163lzmrjvmr.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163kkpfocmy.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163dcisznol.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163wsfcjpki.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163eilimsnp.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ohkuzoxs.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163winqkmqe.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163tidbmlaz.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163lkmiwkql.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163oeqbgicn.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163wtfrpdyd.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163rwjrezwy.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163gzgodntz.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163vnxduhll.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163wrmsrfjp.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163dqeicahx.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163bpgooxuv.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163hbbyzsqy.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163mylvowtm.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163thszeuwx.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163bypiqdnj.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163hfnzgiyj.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163wimsuyll.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163pggvexqc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163euwptbyc.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163kedmjxzg.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163yhduzylq.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163oohjfypl.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163czufahof.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163gbnkfyxy.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163fljtnebe.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163nvwbpbnz.html

Java: a && b || !c
来源：http://www.sxryk.cn/163fuvvraok.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163svvizyki.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163bxvgndxf.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163azivkfgm.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163pxvsfuan.html

Py:   if not data: return
来源：http://www.xuanzx.com/163msvsuset.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163zggleddk.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163tlyjsbix.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163hmewzaft.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163wexvpimj.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163bvhrfbhf.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163wrhhhroa.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ufylqftg.html

================================================================================
来源：http://www.aibaodan.cn/163oznnhpng.html

C. 函数与作用域
来源：http://www.sxryk.cn/163gfqfjpiy.html

================================================================================
来源：http://www.sxryk.cn/163mcfmtuwf.html

[C01] 定义函数
来源：http://www.sxryk.cn/163qgdftijb.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163sdcxdoia.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163yuozqcex.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163dbaxaytd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163pibqkend.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163bcskkewx.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163duiqfslg.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163qmcoxjsk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163dmrgizco.html

[C02] 默认参数
来源：http://www.sxryk.cn/163mespitff.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163hvslrayj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163jktdubyv.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163nfcsrbvo.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163gtxgxbgf.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163xumgshmb.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163uxjlthgo.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163fxuexjww.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163eunvqtrc.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163occruuyq.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163rbtuotbn.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163izpvgndm.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163axguqbly.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163whoikeig.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163rttjgqkc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163fgiudhoa.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163affwipvm.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163wrbrlrox.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163evrdjjtl.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163wakzavpw.html


<!-- 参考信息 -->