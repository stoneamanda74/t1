外链999!wailian999！

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163zpybxlgf.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163mqagolir.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163kmhlsrzp.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163xbuvxjgb.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163gqhssdhc.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163fbrqqsfo.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163wzspbqem.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163csvgcloz.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163mslfspjy.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163frffuisd.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163npfsvmhq.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163xjstazyo.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163tqwcykjv.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163xchqvlze.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163jzniijwg.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163lvovefog.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163xlucgxhv.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163jwnstics.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163oarspkvz.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163tljufbvn.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163czybifwl.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163ykwaesfz.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163dpqsvlcz.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163uhndkogy.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163dqellann.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163ksyaiewk.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163edaqaruv.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163fflhoiqu.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163nbhngkqv.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163qzcikqad.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163jwnaeguo.html

[A17] 位运算
来源：http://www.aibaodan.cn/163xneiqsib.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163hzmxvuxw.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163vftxnilx.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163yszfzhvv.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ssphcmou.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163xcczehen.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163zhlxtcyw.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163grljpxvb.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nmlhxxwq.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163esydyzeq.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163jlkbssrh.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163jbovmadu.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163llewipcr.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163pyqnywsu.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163nnuolqbc.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163mldxnmho.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163bjqcndpq.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163pnwzkgtu.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163oyanjvhs.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163buwdcasf.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163rpocaazo.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163tktzqbqc.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163rjdphwur.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163apuawjsb.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163iypdkmmv.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163cgoatcxl.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163kpljxwvz.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163atjzgxxk.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163phrzvuuj.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163hynkdovv.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163laenrjcq.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163pharimog.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163vaiojzbs.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163shrmpwyd.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163twjdawgt.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163xxoobksi.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163prgroisa.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163edhjmrxu.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163tnihrnhu.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163jycxsyuk.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163peqxamsg.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163oztuwrjj.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ujvkswjw.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163titcurjs.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163diwhbzyz.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163wzgblyqj.html

Py:   len(s)
来源：http://www.sxryk.cn/163mtnogkgu.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163fkxxqzmi.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163puwkbxhm.html

TS:   s.length
来源：http://www.sxryk.cn/163hzgesano.html

Java: s.length()
来源：http://www.aibaodan.cn/163finopcxk.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163vbxtbemr.html

Ruby: s.length
来源：http://www.sxryk.cn/163lfphpnfp.html

C#:   s.Length
来源：http://www.sxryk.cn/163rfriviyv.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163xhaahovc.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163bdnnhuaj.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163nvawmxob.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163vwbqmfvi.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163qvmsqfha.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163dnlcikpi.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163dxonnyvl.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163fbyyxdto.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163yepiamrf.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163jxhxpade.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163sblqrzpw.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163vfcqhqos.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163kxcyirld.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163keuweymj.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163gcperbeo.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163rricmjrc.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163rivhsdse.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163mkibkvvf.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163rurspeef.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163bqvmilnf.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163pwubmlwa.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163unyyyslz.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163knrfzzeh.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163hbvsitnp.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163ljanhdpg.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163amrgjykn.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163kprwhduf.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163pfmfilqk.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163klkmfsjx.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163gztnwxer.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163udntxdai.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163rlbcdvpv.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163fcibmgaf.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163euxsocua.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163royklehb.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163rktmgscj.html

================================================================================
来源：http://www.aibaodan.cn/163xkffvvpj.html

B. 流程控制
来源：http://www.aibaodan.cn/163vkmvguln.html

================================================================================
来源：http://www.aibaodan.cn/163rtnntmfz.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163dzdqcmvd.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163izintyem.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163nyazmnek.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163jjlzanne.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163xlopefvw.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zxlgldma.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163ewztaknt.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163hazvdhno.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163bfymxwwz.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163ofmhlego.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163luasvdyk.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163dulkomsr.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163uuadokks.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163stycklrf.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163kfwbjsiw.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163icrrkrrm.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163laoxiequ.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163lxbvzgbn.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163qlziveyw.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163gybinaaz.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163otbkfayf.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163vzuqqlfu.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163sqacxlcz.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163waxljbdb.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163ksuebjve.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163atggfyvx.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163snjkumwx.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163exzxszgr.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163xuejrsne.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163flnziunt.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163pnqkthya.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163irnwpaii.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163sdhykmnx.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163xnbjhjrv.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163bmrtpnyp.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163wlyjibqu.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163dffndlsw.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163kipiqnbo.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163abeenezh.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163tvjxocst.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ydfslrsh.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163ahohfnbt.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163fuuiwslu.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163amhrtfzi.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163mbhxvklq.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163vsohrrxk.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163npikwmhi.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163dsnovfpy.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163gcjgvrbo.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163jlgziuqv.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163wrjygyxf.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163ugbqszdk.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163ahxgzjdq.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163lywxzefq.html

[B07] while 循环
来源：http://www.aibaodan.cn/163fykvbvst.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163qfbdajli.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163emnxroul.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163iihxzday.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163niwsburm.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163mqiszsss.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163puhcqbhc.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163pcwflrfx.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xirjcukw.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163mpxjfhhb.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163oiypufsk.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163iftzqhdy.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zndalvlv.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163kaqcfpqm.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163atsqscrf.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163njvqudik.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163kspaevyz.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163jsxaxist.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163zpzvifii.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163bzkathuo.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163xiamjjqw.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163kalghncc.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163mrayamaa.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163algngdnb.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163muuqoeob.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163xnqlznst.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wjtyobdd.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163wbfqhlqp.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163gsofepqo.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163kgruubqn.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163snoafecf.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163emvpnmhg.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163avoziqhn.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163mxcolxqt.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163lproxini.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163cxtpwdeo.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163nqesypdf.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163rxnwkpde.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163rppeczao.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163chbbxjpp.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163uubjmdjd.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163lkhqggdp.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163jwbsyscj.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163vmskdejk.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163dupxzfmq.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163exxndplp.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163roabybru.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163wbvijvth.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163pfkpiizd.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ffewshzz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163twnsbqac.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163eauuglym.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163uwhcqqlq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163kvhuvycv.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163siuqlxlr.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163vootfvjl.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163gfpzcvhi.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163vuxcvtah.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163gnzjxsci.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163ujclaqax.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163sriyjemh.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163ucifqvaf.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163sxfwbeyd.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163pprmaexj.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163nttvijda.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163lhxwfrhe.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163oeiaojav.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163qlhgpdpc.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163hygyumqn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163lclocoba.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163lfxfwbbb.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163rstqbeuq.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163vgecvrpg.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163nzuoogfe.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163iumaznon.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163uxtppwrk.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163vjnbeblw.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163khtobmyr.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163qgjtwpog.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163vilzvqrq.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163dpdumcob.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163knhwidhc.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163purbuksl.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163jvhsdrhu.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163obsmaoqe.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163jyzjizui.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163dzbmdyua.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163sxxmknpo.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163egtawkxx.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163engkisfe.html

================================================================================
来源：http://www.xuanzx.com/163fwlbwawy.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163hnxvzqby.html

================================================================================
来源：http://www.sxryk.cn/163ppqcfhmo.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163smewxojt.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163pwqgebhk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163nlcyezdw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163oeywewsr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163kgimzmlz.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ooulylwd.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163birnqdxm.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163ehepsmrr.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163yaoscgeo.html

[C02] 默认参数
来源：http://www.xuanzx.com/163nlywgruc.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ofrdykur.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163lqsbjnwi.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ikxjameo.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163iwpxhmss.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163wcievlzw.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163sfhnhvyr.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163nafequce.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163dczcjuyd.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ecmfnoau.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163pchxugwo.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163vncfwikb.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ksqjmrvk.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163thtccwcg.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163ytwpmhaz.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163xhgcbava.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163qfhnuprw.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163gfufosuh.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163ujshcoqe.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163pwflylbq.html


<!-- 参考信息 -->