外链999!wailian999！

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163vqehbovx.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163dzehajmv.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163mmzusazm.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163rowuijvg.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163dmmdriuz.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163acdacwoj.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163oqxyadbs.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163dnnoiiko.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163qbbafcwo.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163hlorsbkf.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163nbtniddx.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163pwnwcdid.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163rwmwqbuj.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163ewypqdxi.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163vkggjkyu.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ynzppgzy.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163elkxyebn.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163kaejaldd.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163ubyeadxc.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163nbjmzqvz.html

[A14] 注释写法
来源：http://www.xuanzx.com/163bszejmxf.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163shyijlqd.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163vtxtwssn.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163giavcnyx.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163rkythjxt.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163ftugmhec.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163nztmvtur.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163erumlkfi.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163xkloqchj.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163zjwwdcvk.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163yytobwmv.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163ydfkvrrg.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163uozhivgu.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163gmqfdmyq.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163fjxyeamy.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163smybvuve.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163luhkvkdy.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163pcxdkbet.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163guofypbh.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163rkoljrnw.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163ajiaetvh.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163iyetylmm.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163imlamcqg.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163kkkbjghg.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163mgjlyilx.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163ytjqnagt.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163zgudehcl.html

[A17] 位运算
来源：http://www.sxryk.cn/163nesfrjqt.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zwkyrudm.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163nkkwajkd.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163xywtgvnu.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163mscadrxv.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163fsfzosde.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163axwamqyj.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163mmbjcldr.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zgqalbga.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163lofyzvwk.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163noheilzt.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163haqktplo.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163xwlmwbqx.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163cglwfcrr.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163kekisqak.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163tvkmkboh.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163ccvzowlz.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163zweynsdv.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163gytfcztl.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163wesrtbly.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163uhkgqeac.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163yqhoxvqg.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ghzbdoah.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163kxlbdfcx.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163xqzkvans.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163ghyonpzh.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163pbelfrqn.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163zjpsrtsf.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163zxmmothj.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163kfhgyyiz.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163axpvueql.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163oqyesman.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163qawzyfmr.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163ofldvxmi.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163qlhmttfb.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163rdgosgfh.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163uzzdizsw.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163xqxnrncf.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163dsmokejn.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163duvamphm.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163kawzrulw.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163dywnkmqg.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163unkghkbl.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163athprnsi.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163tdlrlwls.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163cbfbxzxt.html

Py:   len(s)
来源：http://www.xuanzx.com/163eqhtkyts.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163mztpfloj.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163yjiqbioz.html

TS:   s.length
来源：http://www.sxryk.cn/163phszbtbc.html

Java: s.length()
来源：http://www.sxryk.cn/163vnbxmzta.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163ojbigrcv.html

Ruby: s.length
来源：http://www.xuanzx.com/163zlsqykgw.html

C#:   s.Length
来源：http://www.aibaodan.cn/163gkqgcqkp.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163suatiywv.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163qdxpuuil.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163upypmjbs.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163qfyyxmup.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ddgfcpgf.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163hlcywdhs.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163yeodfepr.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163pocfxqcg.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163oupxkwvz.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163nhgyzehh.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163uobdmjxc.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163qrhnrybn.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163edznvakm.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163pddxmzyo.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163yczjdtty.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163eopterzs.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163fdkmeiuy.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163zaxrhyvf.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163bhxfoqtu.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163lbbdvrgp.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163rltspsnh.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163lzvthkqv.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163lsasnyya.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163hbegfyho.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163snjgewik.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163knjrftko.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163tmgrxhnn.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163bbxvvmkj.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163pmsuhnqz.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163digxztds.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163syhyateg.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163kkiiiowd.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163pqmvbcga.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163vepynrzs.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163udeaccye.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163uhvjwoes.html

================================================================================
来源：http://www.sxryk.cn/163cnggdiao.html

B. 流程控制
来源：http://www.xuanzx.com/163nbjdiovx.html

================================================================================
来源：http://www.sxryk.cn/163drhpnzem.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163vbfuobdp.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163tcvpajxi.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163jaxolcio.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163bloepcwu.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ervmxsnx.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163supqxgmb.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163qroseacy.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163rsnotnzo.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163nfjqsvho.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163zmvbulhy.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163zkmqjtxh.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163vtcvjpts.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163xbnyklml.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163znvelzwk.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163haldhhym.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163ggaaruje.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163amputbbz.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163yapqekhh.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163xzledjou.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163sgazjdwj.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163fkykazae.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163wifmcxjn.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163rfghhhhr.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163yzoboooq.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163nbtlxrsz.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163yyvcdqib.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163mjhppiya.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163loyrhozn.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163kyctuhrd.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163annvftbo.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163wdkvmypg.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163tcmieqrw.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163hefwqiwu.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163iuhluhso.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163pelwjrir.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163ylzgbjei.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163xlgufpmf.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163qpnsirok.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163gyjogapv.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163qspbiynh.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163vbypwjqx.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163uepzftfo.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163ycpajqzp.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163wejwdxut.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163pflxhnax.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163hvfcunmn.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163lzutvftg.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163ervctwiv.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163xtvccdva.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163jvwdciyr.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163pspehdxm.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163lsqcvxmv.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163omgvpprc.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163uzymdffg.html

[B07] while 循环
来源：http://www.sxryk.cn/163oysznzpb.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163fbejrcyu.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163lfbikkxi.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163khbqonmy.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hrnmjqmu.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ppbpzkuf.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163qcijgcci.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163bbznnzue.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vfmyagcq.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163vivzbpzm.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163lynrvhoh.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163zgqvcfgh.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163eyekrkfd.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163fiodawer.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ctezwpzf.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163nhxnxqgp.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163gucavoor.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hwbpmpyt.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163engszcsn.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163uthusyiz.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163qlzcswnl.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163gfcqyhvl.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ghcnuzza.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zchozoyx.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163xvefltiq.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163wwgsgujq.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163phibrizw.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163ryedamqz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163xxfsguse.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163teoscpak.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163sxvirhbh.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163hcydlrps.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163apmkrujw.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163uhntoohk.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163wxejmafg.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163rjclwwgg.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163rmcgthyb.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163wvdaxgvm.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163aecvqykd.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163rblvqbhv.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163naveicid.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163vznfjwfd.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163ciwoilqy.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163txzjfuxe.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163vjhbwnhx.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163tjunjwqs.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163xcszrmgf.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163hkoneqvk.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163qpbwahmc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ckrrdjpk.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ofyxzqsi.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163glvnxfxb.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163umbirhjo.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163mnplqrom.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163ogfxuzkz.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163dsuuoska.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163bhgfvlak.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ukpalcln.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163wmrmnkqa.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163rrkhzjnh.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163hcictzmh.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163hksyenka.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163fnwiuvdq.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163gffzgaht.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163jtdvvids.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ynelzuqc.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163chgtxezi.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163dblnbvbi.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163gxeyniin.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163znlcgerf.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163vtzwtyif.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163gqyfhmce.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163bpcyunbs.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163xxcxuczg.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163csxrlqen.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163zoovfbqe.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163myqemdzu.html

Java: a && b || !c
来源：http://www.sxryk.cn/163kdogihpr.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163onyqwbtf.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163jbilsuzp.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163esblwjtd.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163ufurmcak.html

Py:   if not data: return
来源：http://www.sxryk.cn/163ugnzpmvb.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163gwijclfc.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ahmfymkf.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163nngacpbc.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163nfmbejwi.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163febkjtyv.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163cbuceqnq.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163bzylbadx.html

================================================================================
来源：http://www.aibaodan.cn/163uvadqwjm.html

C. 函数与作用域
来源：http://www.sxryk.cn/163egicjwig.html

================================================================================
来源：http://www.sxryk.cn/163aaasvsjd.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163wdvdysll.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163yflzjmzi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163xlzzeube.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163sumhvizs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163umkcvinp.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163edviudbo.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163bmuslhxr.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163wvhyoytl.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163cvueclhc.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163foobcsyt.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163fnsfjggs.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163vtgdennc.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163llwmkqzy.html


<!-- 参考信息 -->