外链999!wailian999！

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163fchawagg.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163vlecqwvy.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163mcoshhsg.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163jddgeaeg.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163plewllll.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163swngbaea.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163wzfvmiik.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163soiwzlvc.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163rjdaceka.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163kntycgwj.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163rhibluzn.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163epxbtacd.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163lkmxqewv.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163miirczdw.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163ertjzncy.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163uoawccbu.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163hrxgrqnw.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163swwhdrly.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163apyajcpc.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163rgvdfhjw.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163uucuzolq.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163vxcwrinh.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163yxwzmxsp.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163wknvomna.html

[A14] 注释写法
来源：http://www.xuanzx.com/163udeqdviv.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163snxqiijc.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163yqyycxmk.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163kufozyzk.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163labcgavs.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163wnvcslrs.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163vvxhqbwp.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163jjbrvnjk.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163qdrfcpha.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163hflrdwix.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163ikjhncdo.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163elkkpiig.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163hpjyafdv.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163ukyzzdrr.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163eiwhqtod.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163gqpfeqke.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163vxrgngtl.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163kdcnhtce.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163gffpgyeb.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163pkwhkijc.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163kcnigxde.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163yfmvhbgt.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163cmfbxsux.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163xuejvang.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163rqqyximb.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163mptpatdu.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163lqkkdqfh.html

[A17] 位运算
来源：http://www.aibaodan.cn/163cxyzfrrs.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163rmtqeaxc.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163ypnalarr.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163kpwagbll.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163fooqthwa.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163wtwzqmoi.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163wnwcsmzb.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163zqwpdjrq.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163rgcvghyo.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163styyiele.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163pdxvifjn.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163zgqyneqb.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163dlnverfs.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163jpuczbwk.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163teustyzn.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163kbkujbhv.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163kciyglhx.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163ikmwgrfr.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163ojytdhxh.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163heiolbld.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163udzxpxfx.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163gxzmqwpb.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163swfvsstm.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163rhfiqvpw.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163rtkmsiyv.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163ivrmnxic.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163ebgkvjsf.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163yatadhfe.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163qrfdctjh.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163ngwurwhj.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163ztwazszu.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163wkktpike.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163qonywccj.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163cnpwtqzw.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163vrjlhfhl.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163ijdvsvgy.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163kqzezpkp.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163osjiyjdn.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163pmyuaahy.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163atmfobdh.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163mzkffrmn.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163kjpsqgxh.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163icntkwcw.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163tsapxvor.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163razwgkeg.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163grlknqwl.html

Py:   len(s)
来源：http://www.xuanzx.com/163zkgnuzrm.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163gnlnlkkz.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163iezvruse.html

TS:   s.length
来源：http://www.xuanzx.com/163lqtmkmgo.html

Java: s.length()
来源：http://www.sxryk.cn/163vdfqxpzn.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163zhpagrla.html

Ruby: s.length
来源：http://www.xuanzx.com/163cozzfuuk.html

C#:   s.Length
来源：http://www.sxryk.cn/163zpedmnxg.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163shpyglqy.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163xgzqfout.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163yovkghze.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ekwlrxsp.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163vzsnapju.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163waunhhsh.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163mfroxsjc.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163okrezvxt.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163ambojwvs.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163kqdzvzxd.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163jcvyvhbz.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163cuimtdxw.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163bbqdltcm.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163ulvfbooi.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163yryonwce.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163wcbpwgqa.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163rbvfqwlh.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163ibiadkxc.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163bhhzjoob.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163sxltplep.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163clxvibdq.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163lwbmwepr.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ahasqwki.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163kkwkjmng.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163eorpblqf.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163ubuvdjgw.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163basjfgkq.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163azkqfefs.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163nzkmqpmk.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163cxrpsrls.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163irmcjdey.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163ccwweiaj.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163voeokdhv.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163vukcambn.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163udmzhrfy.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163dzjaoitd.html

================================================================================
来源：http://www.xuanzx.com/163bwloqoca.html

B. 流程控制
来源：http://www.xuanzx.com/163fqkmzdhg.html

================================================================================
来源：http://www.xuanzx.com/163fukeqnje.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163frmuesic.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163murouoem.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163oqedpahs.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163hszmqiyf.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ogpvuies.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163vchbbbkh.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163jowmtush.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163mttcdurd.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163zwiwzool.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163bnkcwmlz.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163iwfqgncd.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163svhamhkg.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163zplcbsip.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163fxzhvdnx.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163cyscrxrb.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163vlkyjcso.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163wvgymfty.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163guisxaai.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163azoesnys.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163eghjcxsp.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163ngokrnjj.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163eqpbrzvm.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163atmegnqa.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163oghktpua.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163rjcnpbss.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163pghkecaa.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163gtsblkuf.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163jofbdfgb.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163wmzhzvlk.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163vkqglsaz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163yroucqkq.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163dvwldkka.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163kejmhpey.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163tfisiisy.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163jnmvivky.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163ttnujgjz.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163hlrzucck.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163yimlffpl.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163raywqwsa.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163qfbzxcyu.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163wbnbtldi.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163zmwoebjn.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163aoedmwyj.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163yqeaxhqf.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163nwoiglvf.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163tuuwkvkd.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163bijrdgop.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163mujpzbte.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163rtmdkitd.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163llelhpui.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163sdzikvky.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163gfvsjfja.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163esbskjmc.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163omqdckmk.html

[B07] while 循环
来源：http://www.xuanzx.com/163xtcqzvag.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163zeaixeba.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163ojcbsizu.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qanmtjhl.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vmymuumn.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163tzcisixf.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163mdkvwvqb.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163pbwzvrkm.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163agzrpfdh.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163nlyueefm.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163mlxiiuhm.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163wvdoufmy.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163gpvjhjdy.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qdkoukte.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163dsqdoykf.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163gkhsiilm.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163bawopnqz.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qpbjqjmk.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163upuojwpk.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163yizpnekv.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163mdkdkcxq.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163fvrkanlr.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qdrgkqxl.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hvzflodv.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163gdiepwhy.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163dlmkwehs.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qwzgzrdd.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163tvwwxuxd.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163njivskuw.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163nqbftpbu.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ehwyfngl.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163cclsluwr.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163cueekyko.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163igcbendv.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163hycfnpsl.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163bufcndfn.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163yegorhiv.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163qooybqbm.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163fiicriwm.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163nuiihhpl.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163fgnvjzqx.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163srwussim.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163fjyscsfi.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163viqznuhw.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163mpdqsvsn.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163baonidnu.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163cwzoecyr.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163iauozzty.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163frtzhowj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163xiijezps.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163anzlsamt.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163eczkrxbt.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163wdbowbjw.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163zkivohtz.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163mzqzvfnx.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163epgghwbc.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163ouupfrkt.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163nkkgvqbt.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163gdeqzrnj.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163nhbwlvux.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163npzhaqra.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163qpusjexy.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163xgywyitd.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163arhwzypf.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ozadkkwj.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163kqppuian.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ikbutxdr.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163aylyhzdl.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163jzuyiunk.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163bpyxlffi.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163jrbuudub.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163wxiddcag.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163gjzdwcpc.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163knkfocui.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163upvssudh.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163uydqahuu.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163cmunpgjd.html

Java: a && b || !c
来源：http://www.sxryk.cn/163hotavgjv.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163jdzlmcdi.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163aejianpq.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163nbuokjor.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163dxqojxch.html

Py:   if not data: return
来源：http://www.sxryk.cn/163jfwhkqxp.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163wvjunuff.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ddlflpfn.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163ovkppsec.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163wwuctllj.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ffuqvdss.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163qriqbmfr.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163vrguevdb.html

================================================================================
来源：http://www.aibaodan.cn/163hhwxiwbr.html

C. 函数与作用域
来源：http://www.sxryk.cn/163xrwqlunx.html

================================================================================
来源：http://www.sxryk.cn/163kyoiesit.html

[C01] 定义函数
来源：http://www.sxryk.cn/163kbtvkaoa.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163efusmave.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163gqqbtakv.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163wutqsywo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163mfldkiqh.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163rtwczuxp.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ivytkokf.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163vluitnmp.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163fguhdkhi.html


<!-- 参考信息 -->