外链999!wailian999！

[A10] 生成随机数
来源：http://www.xuanzx.com/163ugopjkih.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163msigolmv.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163yyhcsgmx.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163hvkwtror.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163nvabyvmo.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163zdswrlcr.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163uvktxlss.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163fdjutiej.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163bjjjbltt.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163rajjobsr.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163qujscgwi.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163odvalzeq.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163fmnsdchq.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163cfzfjxkp.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163kzdnknxl.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163xfeigfze.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163wwkepaqr.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163zyygaoft.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163pdndohlc.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163xxtrdhmn.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163rzbicwkw.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163cmoefprs.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163ldyviiop.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163oeqotgrw.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163qwreugsk.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163enwscbng.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163cpbxxvww.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163voemrcrv.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163omwihcqx.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163jclvzigr.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163tnpcqgys.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163tqxihkbm.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163babihgob.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163khjplofj.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163zpqffzcu.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163fhcwocvx.html

[A14] 注释写法
来源：http://www.sxryk.cn/163bgfdjggq.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163oceomyzh.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163dwvwervg.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163zvrihpqz.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163mqyhbqqu.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163koavvonq.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163yufezqpv.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163uxnkbdkf.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163dvdmxdic.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163uuuqhxfh.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163uxkanlze.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163ohcvruva.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163ykmwqoah.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163hqhjysew.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163ccstjibj.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163ipobftqi.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163hfnlfvra.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163demsccky.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163shxwvhok.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163niuauevj.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163bmvaiftg.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163sfbahydt.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163unysnqzx.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163cavocmem.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163nbjvujcq.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163qaoejiwo.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163evtikgqg.html

[A17] 位运算
来源：http://www.sxryk.cn/163eoaragyq.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163qjrrjwsb.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163iidklbrl.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163gusfgpvw.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163xergdvlp.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163kgdwfssc.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163rucvzbkl.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163eeuuneyp.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163hxfjqtkc.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163ovglbplg.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163rghkcjnj.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163auzvjfdn.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163quyapfoy.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163rrpywfom.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163surjojrj.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163fgwgajix.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163njrztckx.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163mrxztqos.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163gegazzgm.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163nxmkcqrq.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163gcjirokt.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163gbaaeowk.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163oovofrnx.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163wdcflnlk.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163kqbvnotv.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163omaistys.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163lfgrirel.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163nlanlzhe.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163vkhwnpnj.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163odozsdwv.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163echzgbpi.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163aygnpxna.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163kesjbdet.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163eewikufn.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163vxdnjmug.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163qxkxxram.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163aexjswoe.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163odhqlpla.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163tcoughti.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163tetgoziz.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163tuhbvtmu.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163rpmjjysd.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163csqpzswy.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163gofovldp.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163gmcdaapp.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163suyljexj.html

Py:   len(s)
来源：http://www.aibaodan.cn/163aqnpzbun.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163nlsgjqhy.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163mfdzfxxk.html

TS:   s.length
来源：http://www.xuanzx.com/163pkncfwfx.html

Java: s.length()
来源：http://www.xuanzx.com/163kkbdhcym.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163vwzfqifn.html

Ruby: s.length
来源：http://www.sxryk.cn/163iqtljgje.html

C#:   s.Length
来源：http://www.sxryk.cn/163hdngeibe.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163hkqfbtys.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163fwmeoyxc.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163gkzqxyzr.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ywqrfqbc.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163fztiagbc.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163tkvtqojl.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163bzbcdlil.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163lzrvpahe.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163yopjkilv.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163eutxrmps.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163jqkzrkcq.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163opssrtua.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163jjbbkcfp.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163xgcfsvsy.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163npnsinzj.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163kdllqedm.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163xszmeqah.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163lorakmsf.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163zzuhqthy.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163kviiithf.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163llilvute.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163dvahgrpt.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ptitigxb.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163uptjayva.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163zgfecojv.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163rfphktby.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163hcxfgcfg.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163pafefmww.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163tmfeofxz.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163vaqppnzq.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163lnviihvp.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163xzjnsnnr.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163kfvgkaix.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163gihvmzcd.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163vygpdcvj.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163tubatedb.html

================================================================================
来源：http://www.sxryk.cn/163vcowvpse.html

B. 流程控制
来源：http://www.xuanzx.com/163ubmomyzn.html

================================================================================
来源：http://www.aibaodan.cn/163lrqhmjbd.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163ysejrvbt.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163aqittptj.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163enwkzeiu.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163suqjzpht.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163etfyjqsg.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163eeqsegav.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163usybonjf.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163lmabfkwe.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163omnzjurz.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163hddedkdu.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163gacsjihg.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163lbshttke.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ujmxqude.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163dnhpkjcg.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163scllkjxm.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163tvlqtluo.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163gmtizrka.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qizduayi.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163bqttuxmw.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163sqfofhyz.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163qhlqglrw.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163swmyrmum.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163noedhbme.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163fxarcwuk.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163zclzgqdi.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163cmbshmzz.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163iitbjdkw.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163ukdpfcfv.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163quydutzz.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163vbczfanv.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163hkcthhwo.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163nlpvbdgd.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163gvnpolkn.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163jfavzrnh.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163fefyskin.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163jhwyxfow.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163uebespvl.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163etpdtlgs.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163evemyxqt.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163yvhsdbow.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163cduazyif.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163yqchudkj.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163rmthkthb.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163stxrzefe.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163jgbyurgi.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163rjxdyaup.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163asetzfmg.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163qjwmsolh.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163vizsorfs.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163fgnojvvs.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163zsouxvnp.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163srrursug.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163kesfjfbi.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163ikzaqqix.html

[B07] while 循环
来源：http://www.xuanzx.com/163wmzkeawz.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163oxfiejdc.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163rlklcbxd.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163shromqyg.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163atnozvyo.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ggxchanp.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163fktkmszq.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163uzvdnyzq.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163tddxmtdm.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163monvzhyj.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163qgrevepg.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ljsugrdz.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163suntrzry.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lyoexhwt.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163svbjactc.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163uptyaciz.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163utunexqv.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163apkdqbrs.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163oihnzgru.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163fhjdwrhs.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163wmdynncw.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163tmbkhehq.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ajytntho.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163rvslakbq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163znqwqiae.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163caxwjzza.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163tocehtyi.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163lfiduqde.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163qkapaelm.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163sixcwkjm.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163dxwpmkws.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163rarfywgr.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163ikmqrsqk.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163yrrouwsl.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163wsrmbvtm.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163bgliqhvd.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163qeuatkxc.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163vbvqhlzo.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163forybsoe.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ztannfur.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163njwqvhaq.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163vqgryumx.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163smurajoh.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163wesnbxmj.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163pwbqurta.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ibkviabx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163whezwjwa.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163mswnahrb.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163qniyyfgy.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vsvwznxi.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163iiogyytv.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163xicrdsew.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163xmneaqzk.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163cmfgkoiy.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163eqyhmpdv.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163pppoaejx.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ytdbetaw.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163fzhkhgnn.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ncpgktvf.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163fptvrlkz.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163jdaawvns.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163ukxrrsrg.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163uadkhwte.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163rjmywxpb.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163tuximdop.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163efvsklbv.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ihttsikb.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163loqgwifz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163lsuqrsci.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163rgplvcsm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163tifyczzp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163vlkyxjfo.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163etudmrkb.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163tvvnvpmt.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163bjqiujlb.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163yjpocmes.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163wagfkxja.html

Java: a && b || !c
来源：http://www.xuanzx.com/163anpljksc.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163vffoyyvp.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163srjzlgwc.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163tyocvtxn.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163nxbvupoj.html

Py:   if not data: return
来源：http://www.xuanzx.com/163jgwrsnrb.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163gsefftqq.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163lrlmubxp.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163hrrcsgxv.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163pfesrqly.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163rkizsgfx.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163borsupnq.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163rqotzrhc.html


<!-- 参考信息 -->