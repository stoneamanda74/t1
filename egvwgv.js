外链999!wailian999！

[A14] 注释写法
来源：http://www.xuanzx.com/163laeyomvx.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163kvxxasby.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163chyuqumd.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163rguqevyg.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163wvvhaewz.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163vfuogcmx.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163behguwdt.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163jypcxpad.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163xhegapml.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163rdfbbhjq.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163qzmzdiza.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163umlbhwyg.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163zmchasrx.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163ynemgsld.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163tbwblxhm.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163pqeokrnw.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163kdeybsow.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163axhnpmst.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163rpvswrmv.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163idmjrsmt.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163fwroelde.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163gdktfinf.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163odvktava.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163nlcztvbb.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163solzwqhf.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163vutzmveo.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163oqnqiiam.html

[A17] 位运算
来源：http://www.xuanzx.com/163kmgeanaw.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163puckktzm.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163yyrwdgxz.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163nkfilxqa.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163jsyjkqjk.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mqoixdxa.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vzpbpvec.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163bhuvoeud.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163jvaxrkks.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163zxhegffy.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163oeqbdhor.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163fqlkfgkr.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163ifcuifzb.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163xvohroci.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163rxqamgyg.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163rkqbbktg.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163iuaiaqwc.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163rshrqyon.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163lrktvlix.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163hecqsutl.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163zwubvyud.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163ksvnhouu.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163sqantrwx.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163lgbcjkli.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163tesnoqws.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163bbgqdfec.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163afnlvbkh.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163qccipizm.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163itzyrnan.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163gvnjhbjj.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163xoqnrkdw.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163mhlgoeqo.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163mskvjtrz.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163xyjwprvv.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163kqrrloqn.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163cpjwhgkg.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163zgnscjmh.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163vrauazev.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163vwwkrqdo.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163iqnfksze.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163ukbmiofd.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163btnijoqb.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ggehceuj.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163oozphgez.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163fkfagvam.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163ubypajbc.html

Py:   len(s)
来源：http://www.sxryk.cn/163jjplwxdd.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163rrgzbrqp.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163ephcqwli.html

TS:   s.length
来源：http://www.sxryk.cn/163coibnobl.html

Java: s.length()
来源：http://www.sxryk.cn/163fvjlnedj.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163ymjemffj.html

Ruby: s.length
来源：http://www.xuanzx.com/163sjlqdwqx.html

C#:   s.Length
来源：http://www.aibaodan.cn/163vnzyxczu.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163sxvznbmx.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163bgyyryev.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163xuqfcunw.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163cptzqiyu.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163xauulagq.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163mffaqnyz.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163kxpotdqs.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163dilzttoy.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163cxhhlytu.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163jkkmxsda.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163izbmjkis.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163aepcwkvj.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163gottwuif.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163iwqqntkb.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163dareuhlz.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163pstdnids.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163ctxcmfrw.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163uehranfa.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163poewrndh.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163gazqfyhc.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163sdbdkcfv.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163aqdyebjs.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163eyjtkdwe.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163wvmsepoa.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163ezbihrlh.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163knjsydft.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163kujyfaun.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163grjhahuh.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163dzgxlcog.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163aomhnbmf.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163qqkjmzue.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163eungylfl.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163isobqphg.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163xzmoxrqs.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163mriizpvm.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163mstmjvqv.html

================================================================================
来源：http://www.aibaodan.cn/163glrgncvl.html

B. 流程控制
来源：http://www.sxryk.cn/163bfoudawn.html

================================================================================
来源：http://www.sxryk.cn/163wwltuico.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163rfodmrbh.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163jcodqdwj.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163utiwhgpj.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163pyzzxnrg.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163bplvrzim.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163amkcnevo.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163zrlsgpkr.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163ygbnaexf.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163gtmjfcpa.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163sbdmmnlx.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163lhhxnhzo.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163foriydvh.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163niaeilnl.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163zejazujq.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163vdmlsmyg.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163envfhuum.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163usqjewsn.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163vmlwlkdz.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163lrgpesdk.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163cchspvwv.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163igvzocub.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163zfzeklnj.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163dlxjmdkc.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163tcvyiruc.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163ykyqsgqb.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163vkqfngiq.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163vbxfefmm.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163lknvaama.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163ouuwgeww.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163ghbabuyl.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163eqhtasfn.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163syxzfcpj.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163zwglpyig.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163jvvipmsh.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163iqchgtiu.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163nldjeadf.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163sxtpwdfw.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163gtxmpgcm.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163qkhouals.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163tvtujqgc.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163vuyngezb.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163yighokuu.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163rpkbpzgs.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163dsckrpyn.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163xmzdrrbv.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163nfslhdel.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163aoxkvspu.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163tqsjephn.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163cprcwymu.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163rawjwkrx.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163lxghgdyb.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163uliqxjkj.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163ujuodroc.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163ikaegrpf.html

[B07] while 循环
来源：http://www.sxryk.cn/163xckkblpz.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163tnljltbl.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163goozbsrl.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lqhbbszt.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rhlseejy.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163anxplkbe.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163fyrrilrj.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163tforgmst.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jlqrdjaj.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163gdmwwrbk.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163njdbnwbq.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163dhzfncda.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tbmaqduv.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163asimbmpk.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xxfjfcsa.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163nwvlyaaa.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163jgdztcul.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ijtqmwrx.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163hlekhidc.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163jykeznkp.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163kppqumfx.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163xlqfwewl.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163gktdjgcj.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163yvgcmjbh.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163yqstoiyp.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163zzrblhoo.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163sabwnvsy.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163skpfvgis.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163xcpdtpeo.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163cecxafzx.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163pvciammp.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163bimugbum.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163wyppwoiz.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163kcajlbor.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163hktrnxuc.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163ujhcfcfd.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163xpiqmqku.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163fglxszwo.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163byfetyue.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163sqhyspae.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163dzeqeqki.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163xoelilrb.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163uohadfqr.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163fyhllzyp.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163sctqxswg.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163xpruddkl.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163wneibmoy.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163kscrfkfx.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ywdwopnu.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163rekvqehk.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163iodmrcmg.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163luqtucra.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163ncsbgasu.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163glamrpea.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163htemvcph.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163nfmeyuse.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163prtycuvf.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163vqhaqhrj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163cpdkvlok.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163mmzedlzv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163hommxkma.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163vhmxfkfj.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163hiubfiug.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163ceewmkli.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163hvlnkmxz.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163oebgcftd.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163zpksokmm.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163fkwrighw.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163gxkqkdez.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163wugjsson.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163plvroazj.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163pgjafxeh.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163ntrlpwpt.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163quyygutu.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163pgkfpjox.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163ydwawtgs.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163bsfiyugc.html

Java: a && b || !c
来源：http://www.sxryk.cn/163rvhwtxrx.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163lhytobfr.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163fglqiwnx.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163gbjdkgew.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163sgwakvjm.html

Py:   if not data: return
来源：http://www.sxryk.cn/163fbyunesj.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163kcqrlhlo.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163bhvzxrim.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163eafklgdb.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163xaphasnp.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163lrxdfzbq.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163ursxkvns.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163gifjstem.html

================================================================================
来源：http://www.sxryk.cn/163zrcgwzmp.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163bbaehzxq.html

================================================================================
来源：http://www.sxryk.cn/163rfhchwoa.html

[C01] 定义函数
来源：http://www.xuanzx.com/163vaewhkha.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163mbcvatvf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163cbzxvzrq.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163rgiymelp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163gqliqvhx.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163kfsylcxw.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163mliafylg.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163vqsbmzlq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163laqpvwat.html

[C02] 默认参数
来源：http://www.sxryk.cn/163jgnkxfhp.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163lsojrfim.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163xlaqzzma.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163cejumovl.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163ubtbxzvd.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163imnyntts.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163diilgcnp.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163wbhdpwxc.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163twkwrtoy.html

[C03] 可变参数
来源：http://www.xuanzx.com/163xuckmeel.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163kidbmvqi.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163fquxoezy.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163wknrlavj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163qrxqpilv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163axciykpv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163ejmdwein.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163xixdbhqn.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ihkzmudw.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163bhecjepv.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163wfgppode.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163cppbawhk.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163lkloibjk.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163abehcmsq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163jiqsqcks.html


<!-- 参考信息 -->